import { callGeocodingAPI } from "../src/callGeocodingAPI.js";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";

use(chaiAsPromised);

describe("Testing the Geocoding API", function () {
  it("1. It should fail if the options don't exist", async function () {
    await expect(callGeocodingAPI()).to.be.rejectedWith(Error);
  });
  it("2. It should fail if the given address or zip aren't valid", async function () {
    const invalidOptions = {
      address: "#",
    };
    await expect(callGeocodingAPI(invalidOptions)).to.be.rejectedWith(Error);
  });
  it("3. It should return an object with lat and lon for a valid address", async function () {
    const validOptions = {
      address: "Garden of the Gods, Colorado Springs, CO 80904",
    };
    const expectedResult = {
      lat: 38.85156,
      lon: -104.869148,
    };
    expect(await callGeocodingAPI(validOptions)).to.deep.include(
      expectedResult
    );
  });
  it("3. It should return an object with lat and lon for a valid zipcode", async function () {
    const validOptions = {
      zip: 80829,
    };
    const expectedResult = {
      lat: 38.85838719987054,
      lon: -104.91128698040116,
    };
    expect(await callGeocodingAPI(validOptions)).to.deep.include(
      expectedResult
    );
  });
});
