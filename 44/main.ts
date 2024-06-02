// Function to accept a variable number of items for a sandwich
function make_sandwich(...items: string[]) {
  console.log("Sandwich orderd with following items:");
  for (let item of items) {
    console.log(`-${item}`);
  }
  // making space between line for better display
  console.log("\n");
}

// Call the function three times with different numbers of arguments
make_sandwich("egg", "lettuce", "chicken");
make_sandwich("egg", "tomato", "lettuce");
make_sandwich("chicken", "mayo", "cheese");
