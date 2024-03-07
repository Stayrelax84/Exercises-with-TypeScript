var guestList = ["Asif", "Saqib", "Danish", "Shehzad", "Farhan"];
var noGuest = guestList[1];
console.log(noGuest, "Will not Come");
guestList.splice(1, 1, "Junaid");
guestList.forEach(function (newList) { return console.log("Hello ".concat(newList, ", You are invited for Dinner on Sunday")); });
