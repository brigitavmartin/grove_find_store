import fetch from "node-fetch";
import dotenv from "dotenv/config";

export async function callGeocodingAPI(options) {
  const inputString = `https://api.geoapify.com/v1/geocode/search?text=${
    options.address || options.zip
  }&apiKey=${process.env.geoapify}`; // this part fails when not in my original directory
  var result = await fetch(inputString)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  // check if there is a valid result
  if (!result.features) {
    throw new Error(
      "No valid address or zipcode found. Please enter a valid address or zipcode."
    );
  }
  // return the geoapify result with the lat and lon
  return result.features[0].properties;
}
