import { getDistance } from "../src/getDistance.js";
import { expect } from "chai";

/*
  desired test cases
  ------------------
  1. it should fail if it's missing a parameter
  2. it should return 0 if the coordinates match
  3. it should default to miles as the units
  4. it should return km if unit = km
*/

describe("Testing the getDistance function", function () {
  it("1. It should fail if there are no parameters", function () {
    expect(getDistance).to.throw();
  });
});
