// define a function to creat a car object
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // add additional options into car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var car1 = make_car("Honda", "Civic", "color:Silver");
var car2 = make_car("Toyota", "Grande", "color:Black", "year:2024");
var car3 = make_car("Kia", "Sportage", "color:White", "transmission:Auto");
console.log(car1);
console.log(car2);
console.log(car3);
