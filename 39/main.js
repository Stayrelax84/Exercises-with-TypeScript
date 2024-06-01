function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
// calling function in variable with three different city country pairs
var city1 = city_country("Karachi", "Pakistan");
var city2 = city_country("New York", "USA");
var city3 = city_country("Tokyo", "Japan");
// printing all tree variable with function returned values
console.log(city1);
console.log(city2);
console.log(city3);
