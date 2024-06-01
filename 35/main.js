// creating an array
var animals = ["Dog", "Cat", "Parrot", "Duck"];
// using for loop to print animal names
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// modifying for loop to print animal name with msg
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("".concat(animal, " Would be a Great Pet!"));
}
// adding line at the end of program
console.log("Any of These animals would be a Great Pet.");
