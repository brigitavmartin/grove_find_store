import { generateOutput } from "../src/generateOutput.js";
import { expect } from "chai";

describe("Testing the generateOutput function", function () {
  it("1. It should fail if there are no parameters", function () {
    expect(generateOutput).to.throw();
  });
  it("2. It should return an answer in text format by default", function () {
    const closestStore = {
      ["Store Name"]: "Colorado Springs North",
      ["Store Location"]: "SWC Academy Blvd & Montebello",
      Address: "5240 N Academy Blvd",
      City: "Colorado Springs",
      State: "CO",
      ["Zip Code"]: "80918-4004",
      Latitude: 38.9049199,
      Longitude: -104.7806994,
      County: "El Paso County",
    };
    const lat = 38.85838719987054;
    const lon = -104.91128698040116;
    const options = {
      units: "mi",
    };
    expect(generateOutput(closestStore, lat, lon, options)).to.equal(
      "The nearest store address is 5240 N Academy Blvd, Colorado Springs, CO 80918-4004, and the distance is 7.72 mi"
    );
  });
  it("3. It should return an answer in json format", function () {
    const closestStore = {
      ["Store Name"]: "Colorado Springs North",
      ["Store Location"]: "SWC Academy Blvd & Montebello",
      Address: "5240 N Academy Blvd",
      City: "Colorado Springs",
      State: "CO",
      ["Zip Code"]: "80918-4004",
      Latitude: 38.9049199,
      Longitude: -104.7806994,
      County: "El Paso County",
    };
    const lat = 38.85838719987054;
    const lon = -104.91128698040116;
    const options = {
      units: "mi",
      output: "json",
    };
    const expectedResult = {
      storeAddress: "5240 N Academy Blvd, Colorado Springs, CO 80918-4004",
      distance: "7.72 mi",
    };
    expect(generateOutput(closestStore, lat, lon, options)).to.deep.equal(
      expectedResult
    );
  });
});
