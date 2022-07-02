#!/usr/bin/env node
import { parse } from "csv-parse/sync";
import fs from "fs";
import yargs from "yargs";
import fetch from "node-fetch";
import dotenv from "dotenv/config";
import { distance } from "./distance.js";

async function main() {
  // parse csv file into an array of arrays
  // pull out into its own function to test
  const input = fs.readFileSync(`./src/store-locations.csv`);
  const locations = parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
  // define cli options
  // pull out into its own function to test
  const options = yargs
    .usage("Usage: find_store <options>")
    .option("address", {
      alias: "a",
      describe: "Starting point in standard postal address format.",
      type: "string",
    })
    .option("zip", {
      alias: "z",
      describe: "The starting point as a standard postal zipcode.",
      type: "string",
    })
    .option("units", {
      alias: "u",
      describe: "Which unit of distance you would like your answer in.",
      type: "string",
      default: "mi",
      choices: ["km", "mi"],
    })
    .option("output", {
      alias: "o",
      describe: "Which format you would like your output in.",
      type: "string",
      default: "text",
      choices: ["text", "json"],
    }).argv;

  const startingPoint = options.address || options.zip;
  // if an address or a zipcode is inputted
  if (startingPoint) {
    // ping geoapify api to see if a valid result returns
    // pull out into its own function to test
    var result = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${startingPoint}&apiKey=${process.env.geoapify}`
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));

    const { lat, lon } = result.features[0].properties;
    // if the coordinates exist
    if (lat && lon) {
      // sort the locations array based on closest distance to the starting point
      // pull out into its own function to test
      locations.sort(
        (loc1, loc2) =>
          distance(lat, lon, loc1.Latitude, loc1.Longitude) -
          distance(lat, lon, loc2.Latitude, loc2.Longitude)
      );
      const loc = locations[0];
      // define the answer with the store address and distance in given units
      var answer = {
        storeAddress: `${loc.Address}, ${loc.City}, ${loc.State} ${loc["Zip Code"]}`,
        distance: `${distance(
          lat,
          lon,
          loc.Latitude,
          loc.Longitude,
          options.units
        ).toFixed(2)} ${options.units}`,
      };
      // console log answer in either json or text format
      if (options.output == "json") {
        console.log(answer);
      } else {
        console.log(
          `The nearest store address is ${answer.storeAddress}, and the distance is ${answer.distance}`
        );
      }
    }
  } else {
    // if user inputs no address or zipcode, tell them so
    console.log("Please enter a complete address or a zipcode.");
  }
}

main();