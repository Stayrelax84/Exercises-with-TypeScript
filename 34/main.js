// creating an array
var pizza = ["Fajita", "Tikka", "pepperoni", "BBQ"];
// using for loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("\"I Like ".concat(onePizza, " Pizza\""));
}
// printing msg outside of for loop
console.log("Pizza is Love");
