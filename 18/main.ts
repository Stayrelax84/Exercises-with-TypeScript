// added 5 cities in array I would like to visit
let citiesToVisit = ["Zurich", "Prague", "Amsterdam", "Istanbul", "Sydney"];
console.log("Orignal order", citiesToVisit);

// print array with alphabetical order
console.log("Alphabetical order", [...citiesToVisit].sort());

// showing array is still in orignal order
console.log("Orignal order", citiesToVisit);

// print array with reverse order
console.log("Reverse Order", [...citiesToVisit].reverse());

// showing array is still in orignal order
console.log("Orignal order", citiesToVisit);

// changed the order of array with reverse order
console.log("Sorted Reverse", citiesToVisit.reverse());

// changed the reversed order to orignot order
console.log("Orignal order", citiesToVisit.reverse());

// changed the order of array with alphabetical order
console.log("Sorted Alphabetical", citiesToVisit.sort());

// changed the order of array with reverse albhapetical order
console.log("Sorted Reverse Alphabetical", citiesToVisit.reverse());
