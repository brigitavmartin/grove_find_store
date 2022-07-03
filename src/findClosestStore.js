import { distance } from "./distance.js";

/*
  desired test cases
  ------------------
  1. it should fail if a parameter is missing
  2. it should return an object
  3. the returned objct should have minimal distance to the starting point
*/

export function findClosestStore(locations, lat, lon) {
  return locations.sort(
    (loc1, loc2) =>
      distance(lat, lon, loc1.Latitude, loc1.Longitude) -
      distance(lat, lon, loc2.Latitude, loc2.Longitude)
  )[0];
}
