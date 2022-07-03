#!/usr/bin/env node
import dotenv from "dotenv/config";
import { defineCLIOptions } from "./defineCLIOptions.js";
import { callGeocodingAPI } from "./callGeocodingAPI.js";
import { readFile } from "./readFile.js";
import { findClosestStore } from "./findClosestStore.js";
import { generateOutput } from "./generateOutput.js";

async function main() {
  // define cli options
  const options = defineCLIOptions();
  console.log(options);
  // ping geoapify api to see if a valid result returns
  const { lat, lon } = await callGeocodingAPI(options);
  // parse csv file into an array of arrays
  const locations = readFile(`./src/store-locations.csv`);
  // sort the locations array based on closest distance to the starting point
  const closestStore = findClosestStore(locations, lat, lon);
  // output the answer with the store address and distance in given units or default units
  const output = generateOutput(closestStore, lat, lon, options);
  console.log(output);
}

main();
