import fs from "fs";
import { parse } from "csv-parse/sync";

export function readFile(filepath) {
  if (!filepath) {
    throw new Error("Error! readFile isn't getting its needed filepath.");
  }
  const input = fs.readFileSync(filepath);
  return parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
}
