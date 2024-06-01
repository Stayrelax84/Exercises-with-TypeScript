function make_shirt(size: string = "L", text: string = "I Love Typescript") {
  console.log(
    `The size of shirt is ${size} and the text print on it is:${text}`
  );
}
// calling function with default values
make_shirt();

// calling function with M size and default Text
make_shirt("M");

// calling function with S size and different Text
make_shirt("S", "Coding is Fun!");
