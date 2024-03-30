// Tests for equality and inequality with strings

let fruit = "apple";
// Test True
console.log("fruit is Equal to apple?");
console.log(fruit == "apple");

// Test False
console.log("fruit is Equal to Banana?");
console.log(fruit != "apple");

// Tests using the lower case function
let person = "JUNAID";

// Test True
console.log("Person Name written in Upper Case?");
console.log(person == "JUNAID");

// Test False
console.log("Person Name written in Lower Case?");
console.log(person.toLowerCase() == "JUNAID");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;

// Test True
console.log("num1 is Greater than num2?");
console.log(num1 > num2);

// Test False
console.log("num1 is Less than num2");
console.log(num1 < num2);

// Test True
console.log("num1 is not Equalt to num2");
console.log(num1 != num2);

// Test False
console.log("num1 is Equal to num2");
console.log(num1 == num2);

// Test True
console.log("num1 is Grater or Equal to 10");
console.log(num1 >= 10);

// Test False
console.log("num1 is Less or Equal to 5");
console.log(num1 <= 5);

// Tests using "&&" and "||" operators

// Test True using && oprator
console.log("num1 is Greater than num2 & is not Equal to num2");
console.log(num1 > num2 && num1 != num2);

// Test False using && oprator
console.log("num1 is Greater than num2 but  Equatl to num2");
console.log(num1 > num2 && num1 == num2);

// Test True unsing || oprator
console.log("num1 is Greater than num2 or Equal to num2 but 1 is correct only");
console.log(num1 > num2 || num1 == num2);

// Test whether an item is in an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Test True
console.log("Banana is in the fruits Array");
console.log(fruits.includes("Banana"));

// Test False
console.log("Grapes is in the fruits Array");
console.log(fruits.includes("Grapes"));

// Test whether an item is not in an array
// Test True
console.log("Grapse is not in the Array");
console.log(!fruits.includes("Grape"));

// Test False
console.log("Banana is not in the Array");
console.log(!fruits.includes("Banana"));
