# grove_store_find
This is a solution to the grove coding challenge at: https://github.com/groveco/code-challenge

Find Store
  find_store will locate the nearest store (as the crow flies) from
  store-locations.csv, print the matching store address, as well as
  the distance to that store.

Usage:
  find_store --address="<address>"
  find_store --address="<address>" [--units=(mi|km)] [--output=text|json]
  find_store --zip=<zip>
  find_store --zip=<zip> [--units=(mi|km)] [--output=text|json]

Options:
  --zip=<zip>            Find nearest store to this zip code. If there are multiple best-matches, return the first.
  --address="<address>"  Find nearest store to this address. If there are multiple best-matches, return the first.
  --units=(mi|km)        Display units in miles or kilometers [default: mi]
  --output=(text|json)   Output in human-readable text, or in JSON (e.g. machine-readable) [default: text]

Example
  find_store --address="1770 Union St, San Francisco, CA 94123"
  find_store --zip=94115 --units=km

Assumptions:
- all stores are within the US

Pseudocode (Process):
// pull csv file into an array -- CHECK
// parse input (check if address or zip is real using geoapify)
// if valid input -> get coordinates
    // run through csv
    // compare to store's longitude & latitude <-- should this be the default?
    // calculate distance in metric given in input (mi, if none)
    // return first match (make sure to check for options of units & output)
// if invalid input, throw error & menu
