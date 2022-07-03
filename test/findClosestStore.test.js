import { findClosestStore } from "../src/findClosestStore.js";
import { expect } from "chai";

describe("Testing findClosestStore function", function () {
  it("1. It should fail if there are no parameters", function () {
    expect(findClosestStore).to.throw();
  });
  it("2. It should fail if there is a parameter missing", function () {
    expect(findClosestStore).to.throw();
  });
  it("3. It should return the closest store when the answer is the first in the array", function () {
    var locations = [
      {
        ["Store Name"]: "Colorado Springs North",
        ["Store Location"]: "SWC Academy Blvd & Montebello",
        Address: "5240 N Academy Blvd",
        City: "Colorado Springs",
        State: "CO",
        ["Zip Code"]: "80918-4004",
        Latitude: 38.9049199,
        Longitude: -104.7806994,
        County: "El Paso County",
      },
      {
        ["Store Name"]: "Beaumont",
        ["Store Location"]: "NEC Hwy 69/96 & Dowlen Rd",
        Address: "5850 Eastex Fwy",
        City: "Beaumont",
        State: "TX",
        ["Zip Code"]: "77708-4824",
        Latitude: 30.1265511,
        Longitude: -94.1527447,
        County: "Jefferson County",
      },
      {
        ["Store Name"]: "Little Rock North",
        ["Store Location"]: "SWC McCain Blvd & Hwy 67",
        Address: "4000 McCain Blvd",
        City: "North Little Rock",
        State: "AR",
        ["Zip Code"]: "72116-8039",
        Latitude: 34.7893476,
        Longitude: -92.2284247,
        County: "Pulaski County",
      },
      {
        ["Store Name"]: "Casper",
        ["Store Location"]: "SEC Hwy 25 & 2nd St",
        Address: "401 SE Wyoming Blvd",
        City: "Casper",
        State: "WY",
        ["Zip Code"]: "82609-4219",
        Latitude: 42.847325,
        Longitude: -106.263975,
        County: "Natrona County",
      },
    ];
    const lat = 38.85838719987054;
    const lon = -104.91128698040116;
    expect(findClosestStore(locations, lat, lon)).to.deep.include({
      City: "Colorado Springs",
    });
  });
  it("4. It should return the closest store when the answer is not the first in the array", function () {
    var locations = [
      {
        ["Store Name"]: "Beaumont",
        ["Store Location"]: "NEC Hwy 69/96 & Dowlen Rd",
        Address: "5850 Eastex Fwy",
        City: "Beaumont",
        State: "TX",
        ["Zip Code"]: "77708-4824",
        Latitude: 30.1265511,
        Longitude: -94.1527447,
        County: "Jefferson County",
      },
      {
        ["Store Name"]: "Little Rock North",
        ["Store Location"]: "SWC McCain Blvd & Hwy 67",
        Address: "4000 McCain Blvd",
        City: "North Little Rock",
        State: "AR",
        ["Zip Code"]: "72116-8039",
        Latitude: 34.7893476,
        Longitude: -92.2284247,
        County: "Pulaski County",
      },
      {
        ["Store Name"]: "Colorado Springs North",
        ["Store Location"]: "SWC Academy Blvd & Montebello",
        Address: "5240 N Academy Blvd",
        City: "Colorado Springs",
        State: "CO",
        ["Zip Code"]: "80918-4004",
        Latitude: 38.9049199,
        Longitude: -104.7806994,
        County: "El Paso County",
      },
      {
        ["Store Name"]: "Casper",
        ["Store Location"]: "SEC Hwy 25 & 2nd St",
        Address: "401 SE Wyoming Blvd",
        City: "Casper",
        State: "WY",
        ["Zip Code"]: "82609-4219",
        Latitude: 42.847325,
        Longitude: -106.263975,
        County: "Natrona County",
      },
    ];
    const lat = 38.85838719987054;
    const lon = -104.91128698040116;
    expect(findClosestStore(locations, lat, lon)).to.deep.include({
      City: "Colorado Springs",
    });
  });
});
