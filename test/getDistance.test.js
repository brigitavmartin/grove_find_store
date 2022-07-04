import { getDistance } from "../src/getDistance.js";
import { expect } from "chai";

describe("Testing the getDistance function", function () {
  it("1. It should fail if there are no parameters", function () {
    expect(getDistance).to.throw();
  });
  it("2. It should return a zero if the coordinates match", function () {
    const lat = 38.9049199;
    const lon = -104.7806994;
    expect(getDistance(lat, lon, lat, lon)).to.equal(0);
  });
  it("3. It should return a value in miles", function () {
    const lat1 = 38.9049199;
    const lon1 = -104.7806994;
    const lat2 = 38.85838719987054;
    const lon2 = -104.91128698040116;
    expect(getDistance(lat1, lon1, lat2, lon2)).to.equal(7.724205389788675);
  });
  it("4. It should return a value in kilometers", function () {
    const lat1 = 38.9049199;
    const lon1 = -104.7806994;
    const lat2 = 38.85838719987054;
    const lon2 = -104.91128698040116;
    expect(getDistance(lat1, lon1, lat2, lon2, "km")).to.equal(
      12.430903598824065
    );
  });
});
