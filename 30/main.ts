// Creating an Array
let userNames = ["Junaid", "Abdul_Samad", "Salman", "Ziyam", "Admin"];

// Print Messages to every user using loop function
for (let i = 0; i < userNames.length; i++) {
  let userName = userNames[i];
  if (userName === "Admin") {
    console.log("Hello Admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${userName}, thank you for logging in again`);
  }
}

// Print Message to every user unsing .forEach function
userNames.forEach((userName) => {
  if (userName === "Admin") {
    console.log(`Hello ${userName}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${userName}, thank you for logging again`);
  }
});
