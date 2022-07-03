import { distance } from "./distance.js";

export function findClosestStore(locations, lat, lon) {
  return locations.sort(
    (loc1, loc2) =>
      distance(lat, lon, loc1.Latitude, loc1.Longitude) -
      distance(lat, lon, loc2.Latitude, loc2.Longitude)
  )[0];
}
