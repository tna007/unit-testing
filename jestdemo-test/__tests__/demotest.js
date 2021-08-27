"use strict";

const { TestWatcher } = require("jest");

beforeAll(() => {
  console.log("beforeAll", "init before all tests".toUpperCase());
});

afterAll(() => {
  console.log("afterAll", "cleaning after all tests".toUpperCase());
});

test("This is the first test", () => {
  console.log("first test");
});

it("Thisi is the second test", () => {
  console.log("second test");
});

describe("This is a test suite A", () => {
  beforeEach(() => {
    console.log("beforeEach ", "before each test");
  });

  afterEach(() => {
    console.log("afterEach: after each test");
  });

  test("first test in suiteA", () => {
    console.log("first test of suiteA");
  });

  test("second test in suiteA", () => {
    console.log("second test of suiteA");
  });
});

describe("This is suiteB", () => {
  beforeAll(() => {
    console.log("beforeAllSuiteB");
  });

  describe("This is a subsuite of suiteB", () => {
    test("first test of subsuiteA", () => {
      console.log("first of subsuiteA of B");
    });
    test("second test of subsuiteA", () => {
      console.log("second of subsuiteA of B");
    });
  });

  describe("this is a subsuiteB of suiteB", () => {
    test("test 1 of subsuiteB of suiteB", () => {
      console.log("first of subsuiteB of B");
    });
  });
});

describe("test concatenating strings", () => {
  const concat = (partA, partB) => partA + partB;

  test("first and second results firstsecond", () => {
    expect(concat("first", "second")).toBe("firstsecond");
  });
});

describe("this test for an exception", () => {
  function testFunc() {
    throw Error("This is an exception");
  }

  test("test if a function throws an exception", () => {
    expect(() => testFunc()).toThrow("This is an exception");
  });
});
