// creating an array of magicians
var magicians = [
    "Criss Angel",
    "David Blaine",
    "Derren Brown",
    "Dynamo",
];
// function to show magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1);
    }
}
//function to add 'The Great' to each magicians name
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// calling  make_great function in variable to copy the array of magicians
var magician = make_great(magicians);
// call show_magicians to display the modified list
show_magicians(magician);
// calling the orignal array with show_magicians to ensure orignal array is unchanged
show_magicians(magicians);
