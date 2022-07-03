import fetch from "node-fetch";

export async function callGeocodingAPI(options) {
  const inputString = `https://api.geoapify.com/v1/geocode/search?text=${
    options.address || options.zip
  }&apiKey=${process.env.geoapify}`;
  var result = await fetch(inputString)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  const { lat, lon } = result.features[0].properties;
  // check if coordinates exist
  if (!lat || !lon) {
    console.log(
      "No valid address or zipcode found. Please enter a valid address or zipcode."
    );
    process.exit();
  }
  return { lat, lon };
}
