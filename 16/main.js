//Guest list of beginning
var guestList = ["Asif", "Saqib", "Danish", "Shehzad", "Farhan"];
var noGuest = guestList[1];
//guest who cannot come
console.log(noGuest, "Will not Come");
// removed guest who cant make it & added new guest
guestList.splice(1, 1, "Junaid");
guestList.forEach(function (newList) {
    return console.log("Congratulation ".concat(newList, ", We have found Bigger Table now more guest you will meet"));
});
// adding new guest on beginning
guestList.unshift("Furqan");
// add new guest at the end
guestList.push("Pervaiz");
// find middle index of array
var middleIndex = Math.floor(guestList.length / 2);
// add new guest in middle
guestList.splice(middleIndex, 0, "Mohsin");
guestList.forEach(function (moreGuest) { return console.log("Hello ".concat(moreGuest, ", You are invited to Dinner Party on Sunday")); });
