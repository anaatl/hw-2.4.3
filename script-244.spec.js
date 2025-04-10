const calculateBonus = require("./script-244");

// let bonus;
// const sum = a + b;
// sum > 50 ? (bonus = 50) : (bonus = sum);
// return bonus;

describe("Test the sum less 50", () => {
  it("Sum of two positive numbers is less than 50", () => {
    let a = 10;
    let b = 20;

    expect(calculateBonus(a, b)).toBe(30);
  });

  it("Sum of two negative numbers is less than 50", () => {
    let a = -10;
    let b = -20;

    expect(calculateBonus(a, b)).toBe(-30);
  });

  it("Sum of positive and negative numbers is less than 50", () => {
    let a = 50;
    let b = -40;

    expect(calculateBonus(a, b)).toBe(10);
  });

  it("Sum of negative and positive numbers is less than 50", () => {
    let a = -50;
    let b = 40;

    expect(calculateBonus(a, b)).toBe(-10);
  });

  it("Sum of 0 values is less than 50", () => {
    let a = 0;
    let b = 0;

    expect(calculateBonus(a, b)).toBe(0);
  });
});

describe("Test the sum equal 50",() => {
    it("Sum of two positive numbers equals 50", () =>{
        let a = 20;
        let b = 30;

        expect(calculateBonus(a,b)).toBe(50);
    });
    
it("Sum of negative and positive numbers equals 50", () =>{
    let a = -50;
    let b = 100;

    expect(calculateBonus(a,b)).toBe(50);
});

it("Sum of positive and negative numbers equals 50", () =>{
    let a = 80;
    let b = -30;

    expect(calculateBonus(a,b)).toBe(50);
});

});

it("Sum of two positive numbers more than 50", () =>{
    let a = 20;
    let b = 70;

    expect(calculateBonus(a,b)).toBe(50);
});