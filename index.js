#!/usr/bin/env node
import { parse } from "csv-parse/sync";
import fs from "fs";
import yargs from "yargs";
import fetch from "node-fetch";
import dotenv from "dotenv/config";
import { distance } from "./distance.js";

async function main() {
  const input = fs.readFileSync(`./store-locations.csv`);
  const locations = parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
  const options = yargs
    .usage("Usage: store-find <command> <options>")
    .option("address", {
      alias: "a",
      describe: "Starting point in standard postal address format",
      type: "string",
    })
    .option("zip", {
      alias: "z",
      describe: "The starting point as a six-digit zipcode",
      type: "string",
    })
    .option("units", {
      alias: "u",
      describe:
        "Which system of unit you would like your answer in; either kilometers or miles.",
      type: "string",
      default: "mi",
      choices: ["km", "mi"],
    })
    .option("output", {
      alias: "o",
      describe:
        "How you would like your output to look; either as text or in a json format.",
      type: "string",
      default: "text",
      choices: ["text", "json"],
    }).argv;

  const startingPoint = options.address || options.zip;

  if (startingPoint) {
    var result = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${startingPoint}&apiKey=${process.env.geoapify}`
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));

    const { lat, lon } = result.features[0].properties;

    if (lat && lon) {
      locations.sort(
        (startLoc, endLoc) =>
          distance(lat, lon, startLoc.Latitude, startLoc.Longitude) -
          distance(lat, lon, endLoc.Latitude, endLoc.Longitude)
      );
      const loc = locations[0];
      var answer = {
        storeAddress: `${loc.Address}, ${loc.City}, ${loc.State} ${loc["Zip Code"]}`,
        distance: `${distance(
          lat,
          lon,
          locations[0].Latitude,
          locations[0].Longitude,
          options.units
        ).toFixed(2)} ${options.units}`,
      };

      if (options.output == "json") {
        console.log(answer);
      } else {
        console.log(
          `The nearest store address is ${answer.storeAddress}, and the distance is ${answer.distance}`
        );
      }
    }
  } else {
    console.log("Please enter a complete address or a six-digit zipcode.");
  }
}

main();
