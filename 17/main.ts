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

guestList.forEach((moreGuest) =>
  console.log(`Hello ${moreGuest}, You are invited to Dinner Party on Sunday`)
);

// infotming Guest that only two guest invited for Dinner
console.log(
  "Unfortunately, the new dinner table not arrived in time, so i can invite only two Guest"
);

// removing guest using pop one by one

while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(`Sorry ${removedGuest} I can't invite you to the Dinner`);
}

// inviting last two guest
guestList.forEach(lastTwoGuest => console.log(`Congratulation! ${lastTwoGuest} You are still invited to the Dinner`));

// removing last two guests

while (guestList.length > 0) {
  let lastTwo = guestList.pop();
}

console.log(guestList);