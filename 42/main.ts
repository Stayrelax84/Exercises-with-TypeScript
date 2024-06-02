// creating an array of magicians
let magicians: string[] = [
  "Criss Angel",
  "David Blaine",
  "Derren Brown",
  "Dynamo",
];

// function to show magicians
function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

//function to add 'The Great' to each magicians name
function make_great(magicians: string[]) {
  return magicians.map((name) => `The Great ${name}`);
}

// calling  make_great function in variable to modify the array of magicians
let magician = make_great(magicians);

// call show_magicians to display the modified list
show_magicians(magician);
