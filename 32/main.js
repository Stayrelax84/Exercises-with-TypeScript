// Creating Current User & New User Array
var currentUsers = ["Junaid", "Asif", "Salman", "Danish", "Farhan"];
var newUsers = ["Asif", "Saqib", "Farhan", "Shehzad", "Danish"];
// convert current users into lower case for case-insensitive
var currentUsersLowerCase = currentUsers.map(function (user) { return user.toLowerCase(); });
var newUsersLowerCase = newUsers.map(function (user) { return user.toLocaleLowerCase(); });
// using for Loop
for (var _i = 0, newUsersLowerCase_1 = newUsersLowerCase; _i < newUsersLowerCase_1.length; _i++) {
    var newUsers_1 = newUsersLowerCase_1[_i];
    if (currentUsersLowerCase.includes(newUsers_1)) {
        console.log("The username ".concat(newUsers_1, " is already Taken Please enter a new username"));
    }
    else {
        console.log("The username ".concat(newUsers_1, " is Available"));
    }
}
