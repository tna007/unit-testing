"use strict";

const temp = new Array(19).fill(2);

console.log(temp);

const mapped = temp.map((value) => value + 5);
console.log(mapped);
console.log(temp);

const mappedWithInc = temp.map((value, ind) => [value + ind]);
console.log(mappedWithInc);

const bounds = new Array(19).fill(2).map((value, ind) => [value + ind]);
console.log(bounds);

const ubounds = [];
for (let i = 2; i < 21; i++) {
  ubounds.push([i]);
}
console.log(ubounds);
