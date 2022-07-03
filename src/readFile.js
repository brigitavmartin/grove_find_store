import fs from "fs";
import { parse } from "csv-parse/sync";

export function readFile(filepath) {
  const input = fs.readFileSync(filepath);
  return parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
}
