import { getDistance } from "./getDistance.js";

export function findClosestStore(locations, lat, lon) {
  if (!locations || !lat || !lon) {
    throw new Error(
      "findClosestStore isn't getting its needed input; this is bad"
    );
  }
  return locations.sort(
    (loc1, loc2) =>
      getDistance(lat, lon, loc1.Latitude, loc1.Longitude) -
      getDistance(lat, lon, loc2.Latitude, loc2.Longitude)
  )[0];
}
