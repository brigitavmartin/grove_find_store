import { getDistance } from "./getDistance.js";

export function generateOutput(closestStore, lat, lon, options) {
  var answer = {
    storeAddress: `${closestStore.Address}, ${closestStore.City}, ${closestStore.State} ${closestStore["Zip Code"]}`,
    distance: `${getDistance(
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
