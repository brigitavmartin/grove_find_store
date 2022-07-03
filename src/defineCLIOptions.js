import yargs from "yargs";

export function defineCLIOptions() {
  return yargs
    .usage("Usage: find_store <options>")
    .option("address", {
      alias: "a",
      describe: "Starting point in standard postal address format.",
      type: "string",
    })
    .option("zip", {
      alias: "z",
      describe: "The starting point as a standard postal zipcode.",
      type: "string",
    })
    .option("units", {
      alias: "u",
      describe: "Which unit of distance you would like your answer in.",
      type: "string",
      default: "mi",
      choices: ["km", "mi"],
    })
    .option("output", {
      alias: "o",
      describe: "Which format you would like your output in.",
      type: "string",
      default: "text",
      choices: ["text", "json"],
    })
    .check((argv) => {
      if (!argv.address && !argv.zip)
        throw new Error("You must provide either an address or a zipcode.");
      return true;
    }).argv;
}
