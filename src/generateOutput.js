import { distance } from "./distance.js";

/*
  desired test cases
  ------------------
  1. it should fail if a parameter is missing
  2. it should return an answer that defaults to text
  3. it should return a json object if the option is given
*/

export function generateOutput(closestStore, lat, lon, options) {
  var answer = {
    storeAddress: `${closestStore.Address}, ${closestStore.City}, ${closestStore.State} ${closestStore["Zip Code"]}`,
    distance: `${distance(
      lat,
      lon,
      closestStore.Latitude,
      closestStore.Longitude,
      options.units
    ).toFixed(2)} ${options.units}`,
  };
  // console log answer in either json or text format
  if (options.output == "json") {
    return answer;
  } else {
    return `The nearest store address is ${answer.storeAddress}, and the distance is ${answer.distance}`;
  }
}
