import { findClosestStore } from "../src/findClosestStore.js";
import { expect } from "chai";

/*
  desired test cases
  ------------------
  1. it should fail if a parameter is missing
  2. it should return an object
  3. the returned objct should have minimal distance to the starting point
*/

describe("Testing findClosestStore function", function () {
  it("1. It should fail if there are no parameters", function () {
    expect(findClosestStore).to.throw();
  });
  // it("2. It should fail if there is a parameter missing", function (done) {
  //   expect(findClosestStore().fails);
  //   done();
  // });
  // it("3. It should fail if the given address or zip aren't valid", function (done) {
  //   const invalidOptions = {
  //     address: "",
  //   };
  //   expect(callGeocodingAPI(invalidOptions).fails);
  //   done();
  // });
  // it("4. It should return an object with lat and lon", function (done) {
  //   const validOptions = {
  //     address: "Garden of the Gods, Colorado Springs, CO 80904",
  //   };
  //   const expectedResult = {
  //     lat: 104.8698,
  //     lon: 38.8784,
  //   };
  //   expect(callGeocodingAPI(validOptions).to.deep.include(expectedResult));
  //   done();
  // });
});
