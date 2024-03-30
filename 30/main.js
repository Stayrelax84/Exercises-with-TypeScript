// Creating an Array
var userNames = ["Junaid", "Abdul_Samad", "Salman", "Ziyam", "Admin"];
// Print Messages to every user using loop function
for (var i = 0; i < userNames.length; i++) {
    var userName = userNames[i];
    if (userName === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again"));
    }
}
// Print Message to every user unsing .forEach function
userNames.forEach(function (userName) {
    if (userName === "Admin") {
        console.log("Hello ".concat(userName, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging again"));
    }
});
