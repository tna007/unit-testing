"use strict";

const Dice = require("../dice");

describe("Create a dice with no upper bound given", () => {
  const dice = new Dice();

  test("maximum dot count is 6", () => {
    expect(dice.maximumValue).toBe(6);
  });

  test("minimum dot count is 1", () => {
    expect(dice.minimumValue).toBe(1);
  });

  test("dots is 0", () => {
    expect(dice.dots).toBe(0);
  });
});

describe("Create a dice with a given upper bound 2-20", () => {
  const testCases = new Array(19).fill(2).map((value, ind) => [value + ind]);

  test.each(testCases)("test upper bound %s", (upperBound) => {
    const dice = new Dice(upperBound);
    expect(dice.maximumValue).toBe(upperBound);
    expect(dice.minimumValue).toBe(1);
  });
});

describe("Test exceptions", () => {
  const testCases = [
    [0, "Upper bound too small"],
    [1, "Upper bound too small"],
    [-1, "Upper bound too small"],
    [21, "Upper bound too big"],
    ["a", "Upper bound must be an integer"],
    [2.5, "Upper bound must be an integer"],
  ];

  const dice = new Dice();

  test.each(testCases)(
    "upper bound %s throws an exception %s",
    (ubound, expcted) => {
      expect(() => {
        new Dice(ubound);
      }).toThrow(expcted);
      expect(dice.minimumValue).toBe(1);
    }
  );
});

describe("Test rolling", () => {
  describe("Default upper bound 6", () => {
    const dice = new Dice();

    test("test when dice is rolled", () => {
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(6);
    });
  });
  describe("Dice with upper bound 20", () => {
    const dice = new Dice(20);

    test("test when dice is rolled", () => {
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(20);
    });
  });
  describe("Create a dice with a given upper bound 2-20 and roll it", () => {
    const testCases = new Array(19).fill(2).map((value, ind) => [value + ind]);

    test.each(testCases)("test upper bound %s", (upperBound) => {
      const dice = new Dice(upperBound);
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(upperBound);
    });
  });
});

describe("Test toString", () => {
  let dice;

  beforeEach(() => {
    dice = new Dice();
  });

  test("dice not rolled yet", () => {
    expect(dice.toString()).toBe("Not rolled yet");
  });

  test("dice rolled", () => {
    dice.roll();
    expect(dice.toString()).toBe(`${dice.dots}`);
  });
});

describe("methods and getters defined", () => {
  const dice = new Dice();

  test("minimumValue defined", () => {
    expect(dice.minimumValue).toBeDefined();
  });

  test("maximumValue defined", () => {
    expect(dice.maximumValue).toBeDefined();
  });

  test("dots defined", () => {
    expect(dice.dots).toBeDefined();
  });

  test("roll defined", () => {
    expect(dice.roll).toBeDefined();
  });

  test("toString defined", () => {
    //always defined
    expect(dice.toString).toBeDefined();
  });
});
