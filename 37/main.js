function make_shirt(size, text) {
    if (size === void 0) { size = "L"; }
    if (text === void 0) { text = "I Love Typescript"; }
    console.log("The size of shirt is ".concat(size, " and the text print on it is:").concat(text));
}
// calling function with default values
make_shirt();
// calling function with M size and default Text
make_shirt("M");
// calling function with S size and different Text
make_shirt("S", "Coding is Fun!");
