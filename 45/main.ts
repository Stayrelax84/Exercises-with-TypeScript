// define a function to creat a car object
function make_car(manufacturer, model, ...options) {
  let car = {
    manufacturer: manufacturer,
    model: model,
  };
  // add additional options into car object
  options.forEach((option) => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
  });
  return car;
}
let car1 = make_car("Honda", "Civic", "color:Silver");
let car2 = make_car("Toyota", "Grande", "color:Black", "year:2024");
let car3 = make_car("Kia", "Sportage", "color:White", "transmission:Auto");
console.log(car1);
console.log(car2);
console.log(car3);
