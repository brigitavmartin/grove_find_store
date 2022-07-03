import fs from "fs";
import { parse } from "csv-parse/sync";

/*
  desired test cases
  ------------------
  1. it should fail if filepath don't exist
  2. it should return an array
*/

export function readFile(filepath) {
  const input = fs.readFileSync(filepath);
  return parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
}
