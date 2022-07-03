// this was pulled from https://www.geodatasource.com/developers/javascript

/*
  desired test cases
  ------------------
  1. it should fail if it's missing a parameter
  2. it should return 0 if the coordinates match
  3. it should default to miles as the units
  4. it should return km if unit = km
*/

export function getDistance(lat1, lon1, lat2, lon2, unit) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "km") {
      dist = dist * 1.609344;
    }
    return dist;
  }
}
