let guestList = ["Asif", "Saqib", "Danish", "Shehzad", "Farhan"];
let noGuest = guestList[1];
console.log(noGuest, "Will not Come");

guestList.splice(1, 1, "Junaid");
guestList.forEach(newList => console.log(`Hello ${newList}, You are invited for Dinner on Sunday`))