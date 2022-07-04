# grove_find_store

This is a solution to the Grove coding challenge at: https://github.com/groveco/code-challenge

It is a javascript application that finds the distance (as the crow flies) between a user-given address or zipcode and the nearest Grove store out of the included csv file, store-locations. The CLI app calls a geocoding api called geoapify and uses yargs for its CLI options and some input validation. The crux of the application is the utilization of array.sort((a, b) -> a - b) to sort the locations array based on the shortest distance between the coordinates of the starting point and those of each store. The distance-between-coordinates calculation is modified version of the one found at https://www.geodatasource.com/developers/javascript.

All functions except defineCLIOptions.js are tested using Mocha JS and Chai JS, including the extension chaiAsPromised for callGeocodingAPI.test.js.

Usage matches the given CLI specs, as shown below, although there are single-letter options included (such as "-a" for "-address", "-z" for "-zip", etc).

```
Find Store
  find_store will locate the nearest store (as the crow flies) from
  store-locations.csv, print the matching store address, as well as
  the distance to that store.

Usage:
  find_store --address="<address>"
  find_store --address="<address>" [--units=(mi|km)] [--output=text|json]
  find_store --zip=<zip>
  find_store --zip=<zip> [--units=(mi|km)] [--output=text|json]

Options:
  --zip=<zip>            Find nearest store to this zip code. If there are multiple best-matches, return the first.
  --address="<address>"  Find nearest store to this address. If there are multiple best-matches, return the first.
  --units=(mi|km)        Display units in miles or kilometers [default: mi]
  --output=(text|json)   Output in human-readable text, or in JSON (e.g. machine-readable) [default: text]

Example
  find_store --address="1770 Union St, San Francisco, CA 94123"
  find_store --zip=94115 --units=km --output=json
```

Installation Instructions:

1. If you don't have it already, download and install nodeJS (which comes with npm) at https://nodejs.org/en/download/
2. Create a free account and a project at https://www.geoapify.com to generate an api key then add it to your environment variables. {insert instructions}
3. Clone this repo.
4. Open a Command Line or Terminal window and install the Find Store CLI by entering `npm install --location=global`
   Note: Depending on your set-up, you may need to add `sudo` before the rest of the command.
