// Write an if statement for person’s stage of life
let personAge = 3;

if (personAge < 2) {
  console.log("Person is Baby");
} else if (personAge >= 2 && personAge < 4) {
  console.log("Person is Toddler");
} else if (personAge >= 4 && personAge < 13) {
  console.log("Person is Kid");
} else if (personAge >= 13 && personAge < 20) {
  console.log("Person is Teenager");
} else if (personAge >= 20 && personAge < 65) {
  console.log("Person is an Adult");
} else if (personAge >= 65 && personAge < 80) {
  console.log("Person is Senior Citizen");
} else {
  console.log("That is Too Much");
}
