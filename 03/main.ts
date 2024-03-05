let personName: string = "junaid Razzaq";

console.log("LowerCase", personName.toLowerCase());
console.log("UpperCase", personName.toUpperCase());
console.log("TitleCase", personName.replace(/\b\w/g, (char) => char.toUpperCase()));
