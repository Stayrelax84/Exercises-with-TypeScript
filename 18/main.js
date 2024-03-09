var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// added 5 cities in array I would like to visit
var citiesToVisit = ["Zurich", "Prague", "Amsterdam", "Istanbul", "Sydney"];
console.log("Orignal order", citiesToVisit);
// print array with alphabetical order
console.log("Alphabetical order", __spreadArray([], citiesToVisit, true).sort());
// showing array is still in orignal order
console.log("Orignal order", citiesToVisit);
// print array with reverse order
console.log("Reverse Order", __spreadArray([], citiesToVisit, true).reverse());
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
