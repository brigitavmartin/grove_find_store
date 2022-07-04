import { readFile } from "../src/readFile.js";
import { expect } from "chai";

describe("Testing the readFile function", function () {
  it("1. It should fail if there is no parameter", function () {
    expect(readFile).to.throw();
  });
  it("2. It should return an array", function () {
    const filepath = `./src/store-locations.csv`;
    expect(readFile(filepath)).to.be.a("array");
  });
});
