"use strict";

const { TestWatcher } = require("@jest/core");
const PhoneRegister = require("../PhoneRegister");
const phones = require("../phones.json");

describe("constructor", () => {
  test("object created", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.phoneRegister).toEqual(phones);
  });

  test('missing parameter throws an exception "phone data missing"', () => {
    expect(() => new PhoneRegister()).toThrow("phone data missing");
  });
});

describe("Testing getTypes", () => {
  test("use default jsonData", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.getTypes()).toEqual(["home", "work", "mobile"]);
    //expect(phoneRegister.getTypes().sort()).toEqual(["home","work","mobile"])
  });

  test("persons have no phones", () => {
    const testData = [
      {
        firstname: "Woody",
        lastname: "Hoody",
        phones: [],
      },
      {
        firstname: "Mickey",
        lastname: "Minnie",
        phones: [],
      },
    ];

    const phoneRegister = new PhoneRegister(testData);
    expect(phoneRegister.getTypes()).toEqual([]);
  });

  test("no persons in phoneRegister", () => {
    const phoneRegister = new PhoneRegister([]);
    expect(phoneRegister.getTypes()).toEqual([]);
  });
});

describe("Testing getNumbersByType", () => {
  const phoneRegister = new PhoneRegister(phones);

  test("Get from default jsonData with parameters Woody, Hoody, work", () => {
    expect(phoneRegister.getNumbersByType("Woody", "Hoody", "work")).toEqual([
      "8765489",
      "22555888",
    ]);
  });

  test("Get from default jsonData with parameters Mickey, Minnie, work", () => {
    expect(
      phoneRegister.getNumbersByType("Mickey", "Minnie", "mobile")
    ).toEqual(["04458795"]);
  });

  describe("wrong type or name returns an empty array", () => {
    const testValues = [
      //firstname,lastname,type,expected
      ["Mickey", "Minnie", "x", []],
      ["Mickey", "x", "mobile", []],
      ["x", "Minnie", "mobile", []],
    ];

    test.each(testValues)(
      'getNumbersByType("%s","%s","%s") returns an empty array %s',
      (firstname, lastname, type, expected) => {
        expect(
          phoneRegister.getNumbersByType(firstname, lastname, type, expected)
        ).toEqual(expected);
      }
    );
  });

  describe("missing parameter throws an exception", () => {
    test("one parameter missing", () => {
      expect(() => phoneRegister.getNumbersByType("Woody", "Hoody")).toThrow(
        "missing parameter"
      );
    });

    test("two parameter missing", () => {
      expect(() => phoneRegister.getNumbersByType("Woody")).toThrow(
        "missing parameter"
      );
    });

    test("all parameter missing", () => {
      expect(() => phoneRegister.getNumbersByType()).toThrow(
        "missing parameter"
      );
    });
  });
});

describe("Testing getAllNumbersByType", () => {
  const phoneRegister = new PhoneRegister(phones);

  test("Get all work numbers", () => {
    const expectedResults = [
      {
        firstname: "Woody",
        lastname: "Hoody",
        number: {
          type: "work",
          tel: "8765489",
        },
      },
      {
        firstname: "Woody",
        lastname: "Hoody",
        number: {
          type: "work",
          tel: "22555888",
        },
      },
      {
        firstname: "Mickey",
        lastname: "Minnie",
        number: {
          type: "work",
          tel: "23575889",
        },
      },
    ];
    expect(phoneRegister.getAllNumbersByType("work")).toEqual(expectedResults);
  });

  test("Get all mobile numbers", () => {
    expect(phoneRegister.getAllNumbersByType("mobile")).toEqual([
      {
        firstname: "Mickey",
        lastname: "Minnie",
        number: {
          type: "mobile",
          tel: "04458795",
        },
      },
    ]);
  });

  test('type "x" will return an empty array []', () => {
    expect(phoneRegister.getAllNumbersByType("x")).toEqual([]);
  });

  test("missing parameter throws an exception", () => {
    expect(() => phoneRegister.getAllNumbersByType()).toThrow(
      "missing parameter"
    );
  });
});
