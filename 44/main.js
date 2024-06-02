// Function to accept a variable number of items for a sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich orderd with following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("-".concat(item));
    }
    // making space between line for better display
    console.log("\n");
}
// Call the function three times with different numbers of arguments
make_sandwich("egg", "lettuce", "chicken");
make_sandwich("egg", "tomato", "lettuce");
make_sandwich("chicken", "mayo", "cheese");
