import fetch from "node-fetch";

export async function callGeocodingAPI(inputString) {
  return await fetch(inputString)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}
