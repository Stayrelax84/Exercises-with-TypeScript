let userNames = [
  "john_doe",
  "jane_smith",
  "admin",
  "alice_wonderland",
  "bob_the_builder",
];

// Check if 'admin' is in the array
if (userNames.includes("admin")) {
  console.log("Hello admin, would you like to see a status report?");
}

// Check if 'john_doe' is in the array
if (userNames.includes("john_doe")) {
  console.log("Welcome, john_doe! thank you for logging in again");
}

// Check if 'jane_smith' is in the array
if (userNames.includes("jane_smith")) {
  console.log("Welcome, jane_smith! thank you for logging in again");
}

// Check if 'alice_wonderland' is in the array
if (userNames.includes("alice_wonderland")) {
  console.log("Welcome, alice_wonderland! thank you for logging in again");
}

// Check if 'mary_jane' is in the array
if (userNames.includes("mary_jane")) {
  console.log("Welcome, mary_jane!");
} else {
  console.log("User not found!");
}
