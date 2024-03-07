//Guest list of beginning
let guestList = ["Asif", "Saqib", "Danish", "Shehzad", "Farhan"];
let noGuest = guestList[1];

//guest who cannot come
console.log(noGuest, "Will not Come");

// removed guest who cant make it & added new guest
guestList.splice(1, 1, "Junaid");
guestList.forEach((newList) =>
  console.log(
    `Congratulation ${newList}, We have found Bigger Table now more guest you will meet`
  )
);

// adding new guest on beginning
guestList.unshift("Furqan");

// add new guest at the end
guestList.push("Pervaiz");

// find middle index of array
let middleIndex: number = Math.floor(guestList.length / 2);

// add new guest in middle
guestList.splice(middleIndex, 0, "Mohsin");

guestList.forEach((moreGuest) => console.log(`Hello ${moreGuest}, You are invited to Dinner Party on Sunday`));
