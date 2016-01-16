jest.dontMock("../src/calculator.js");

var Calculator = require('../src/calculator');

describe("calculator", () => {
  it("should do addition of two numbers", () => {
    expect(Calculator.sum(10, 12)).toEqual(22);
  });
});

