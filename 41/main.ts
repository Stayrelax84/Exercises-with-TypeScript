// creating an array of megician names
let magicians = ["Criss Angel", "David Blaine", "Dynamo", "Derren Brown"];

function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}
show_magicians(magicians);
