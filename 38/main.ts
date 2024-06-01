function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} is in ${country}`);
}

// calling function with city and defaul country
describe_city("Karachi");
describe_city("Lahore");

// calling function with different country
describe_city("New York", "USA");
