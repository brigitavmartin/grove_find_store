#!/usr/bin/env node
import dotenv from "dotenv/config";
import { distance } from "./distance.js";
import { readFile } from "./readFile.js";
import { defineCLIOptions } from "./defineCLIOptions.js";
import { callGeocodingAPI } from "./callGeocodingAPI.js";
import { findClosestStore } from "./findClosestStore.js";

async function main() {
  // define cli options
  const options = defineCLIOptions();
  // ping geoapify api to see if a valid result returns
  const { lat, lon } = await callGeocodingAPI(options);
  //parse csv file into an array of arrays
  const locations = readFile(`./src/store-locations.csv`);
  // sort the locations array based on closest distance to the starting point
  const loc = findClosestStore(locations, lat, lon);
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

main();
