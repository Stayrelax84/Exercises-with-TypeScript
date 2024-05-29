// Creating Current User & New User Array
let currentUsers = ["Junaid", "Asif", "Salman", "Danish", "Farhan"];
let newUsers = ["Asif", "Saqib", "Farhan", "Shehzad", "Danish"];

// convert current users & new users into lower case for case-insensitive
let currentUsersLowerCase = currentUsers.map((user) => user.toLowerCase());
let newUsersLowerCase = newUsers.map((user) => user.toLocaleLowerCase());
// using for Loop
for (let newUsers of newUsersLowerCase) {
  if (currentUsersLowerCase.includes(newUsers)) {
    console.log(
      `The username ${newUsers} is already Taken Please enter a new username`
    );
  } else {
    console.log(`The username ${newUsers} is Available`);
  }
}
