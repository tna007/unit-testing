"use strict";

const register = require("./phones.json");

console.log(register[0]);

for (let person of register) {
  console.log(`${person.firstname} ${person.lastname}`);
}

for (let person of register) {
  console.log(`${person.firstname} ${person.lastname}`);
  for (let phone of person.phones) {
    console.log(`\t ${phone.type}: ${phone.number}`);
  }
}
