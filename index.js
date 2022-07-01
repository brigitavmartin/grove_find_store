#!/usr/bin/env node
import { parse } from "csv-parse/sync";
import fs from "fs";
import yargs from "yargs";
import fetch from "node-fetch";
import dotenv from 'dotenv/config';

var requestOptions = {
  method: 'GET',
};

const input = fs.readFileSync(`./store-locations.csv`);
const locations = parse(input, {
  columns: true,
  skip_empty_lines: true
});

console.log(locations[0]);

const options = yargs
 .usage("Usage: store-find <command> <options>")
 .option("address", { alias: "address", describe: "starting point in standard postal address format", type: "string", demandOption: false })
 .option("zip", {alias: "zipcode", describe: "the starting point as a six-digit zipcode", type: "string", demandOption: false})
 .option("units", {alias: "distance format", describe: "which system of unit you would like your answer in", type: "string", demandOption: false})
 .option("output", {alias: "result format", describe: "either json or text file", type: "string", demandOption: false})
 .argv;

const startingPoint = options.address || options.zip;

if (startingPoint) {
  fetch(`https://api.geoapify.com/v1/geocode/search?text=${startingPoint}&apiKey=${process.env.geoapify}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
else {
  console.log("Please enter an address or zipcode.");
}
