//Q No.2
let Name: string = "Junaid";
let message: string = `Hello ${Name}, would you like to learn some Python today?`;

console.log(message)

//Q No.3
let personname: string = "junaid razzaq";
let lowercase: string = personname.toLowerCase();
let uppercase: string = personname.toUpperCase();
let titlecase: string = personname.replace(/\b\w/g, (char) => char.toUpperCase());

console.log(lowercase)
console.log(uppercase)
console.log(titlecase)

//Q No.4
let quote: string = "A person who never made a mistake never tried anything new";
let author: string = "Alber Einstein";

console.log(`${author} once said, "${quote}"`)

//Q No.5
let Quote: string = "A person who never made a mistake never tried anything new"
let famous_person: string = "Alber Einstein";
let Message: string = `${famous_person} once said, "${Quote}"`

console.log(Message)

//Q No.6
let personName: string = "\t  \n Junaid Razzak \t \n";

console.log(`With White Space"${personName}"`);

let trimmedName: string = personName.trim();
console.log(`Trimmed Name "${trimmedName}"`)


