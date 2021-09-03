"use strict";

module.exports = class PhoneRegister {
  constructor(data) {
    // if (data) {
    //   this.phoneRegister = data;
    // } else {
    //   throw new Error("phone data missing");
    // }
    if (!data) throw new Error("phone data missing");
    this.phoneRegister = data;
  }

  getTypes() {
    const types = [];

    for (let person of this.phoneRegister) {
      for (let phone of person.phones) {
        if (!types.includes(phone.type)) {
          types.push(phone.type);
        }
      }
    }
    return types;
  }

  getNumbersByType(firstname, lastname, type) {
    if ((firstname, lastname, type)) {
      const numbersFound = [];
      for (let person of this.phoneRegister) {
        if (person.firstname === firstname && person.lastname === lastname) {
          for (let phone of person.phones) {
            if (phone.type === type) {
              numbersFound.push(phone.number);
            }
          }
        }
      }

      return numbersFound;
    } else {
      throw new Error("missing parameter");
    }
  }

  getAllNumbersByType(type) {
    if (!type) throw new Error("missing parameter");

    const found = [];

    for (let person of this.phoneRegister) {
      for (let phone of person.phones) {
        if (phone.type === type) {
          found.push({
            firstname: person.firstname,
            lastname: person.lastname,
            number: {
              type: phone.type,
              tel: phone.number,
            },
          });
        }
      }
    }

    return found;
  }
};
