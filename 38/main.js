function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// calling function with city and defaul country
describe_city("Karachi");
describe_city("Lahore");
// calling function with different country
describe_city("New York", "USA");
