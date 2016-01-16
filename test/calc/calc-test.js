jest.dontMock("../../src/calculator/calc.js");

var Calculator = require('../../src/calculator/calc');

describe("calculator", () => {
  it("should do addition of two numbers", () => {
    expect(Calculator.sum(10, 12)).toEqual(22);
  });
});

