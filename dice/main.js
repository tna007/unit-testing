"use strict";

const Dice = require("./dice");

// const diceA = new Dice();
// const diceB = new Dice();
const diceA = new Dice(2);
const diceB = new Dice(2);

console.log("dice A:", diceA.toString());
console.log("dice B: " + diceB);

diceA.roll();
diceB.roll();

console.log("dice A:", diceA.toString());
console.log("dice B: " + diceB);

if (diceA.dots === diceB.dots) {
  console.log("same dots");
} else if (diceA.dots > diceB.dots) {
  console.log("A wins");
} else {
  console.log("B wins");
}
