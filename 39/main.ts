function city_country(city: string, country: string) {
  return `${city},${country}`;
}

// calling function in variable with three different city country pairs
let city1 = city_country("Karachi", "Pakistan");
let city2 = city_country("New York", "USA");
let city3 = city_country("Tokyo", "Japan");

// printing all tree variable with function returned values
console.log(city1);
console.log(city2);
console.log(city3);
