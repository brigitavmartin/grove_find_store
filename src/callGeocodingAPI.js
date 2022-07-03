import fetch from "node-fetch";

/*
  desired test cases
  ------------------
  1. it should fail if options don't exist
  2. it should fail if the given address or zip aren't valid
  3. it should return an object with lat and lon
*/

export async function callGeocodingAPI(options) {
  const inputString = `https://api.geoapify.com/v1/geocode/search?text=${
    options.address || options.zip
  }&apiKey=${process.env.geoapify}`;
  var result = await fetch(inputString)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  // check if there is a valid result
  if (!result.features) {
    console.log(
      "No valid address or zipcode found. Please enter a valid address or zipcode."
    );
    process.exit();
  }
  return result.features[0].properties;
}
