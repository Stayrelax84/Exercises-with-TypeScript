// Creating an Array
let userNames = ["Junaid", "Abdul_Samad", "Salman", "Ziyam", "Admin"];

// ReDefine the Array
// userNames = [];

// Print Message if list empty
if (userNames.length === 0) {
  console.log("We need to find some users!");
} else {
  userNames.forEach((userName) => {
    if (userName === "Admin") {
      console.log(`Hello ${userName}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${userName}, thank you for logging again`);
    }
  });
}
