//Q No.2
var Name = "Junaid";
var message = "Hello ".concat(Name, ", would you like to learn some Python today?");
console.log(message);
//Q No.3
var personname = "junaid razzaq";
var lowercase = personname.toLowerCase();
var uppercase = personname.toUpperCase();
var titlecase = personname.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(lowercase);
console.log(uppercase);
console.log(titlecase);
//Q No.4
var quote = "A person who never made a mistake never tried anything new";
var author = "Alber Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
//Q No.5
var Quote = "A person who never made a mistake never tried anything new";
var famous_person = "Alber Einstein";
var Message = "".concat(famous_person, " once said, \"").concat(Quote, "\"");
console.log(Message);
//Q No.6
var personName = "\t  \n Junaid Razzak \t \n";
console.log("With White Space\"".concat(personName, "\""));
var trimmedName = personName.trim();
console.log("Trimmed Name \"".concat(trimmedName, "\""));
