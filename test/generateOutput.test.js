import { generateOutput } from "../src/generateOutput.js";
import { expect } from "chai";

/*
  desired test cases
  ------------------
  1. it should fail if a parameter is missing
  2. it should return an answer that defaults to text
  3. it should return a json object if the option is given
*/

describe("Testing the generateOutput function", function () {
  it("1. It should fail if there are no parameters", function (done) {
    // expect(
    //   generateOutput().to.throw(
    //     `TypeError: Cannot read properties of undefined (reading 'Address')`
    //   )
    // );
    done();
  });
});
