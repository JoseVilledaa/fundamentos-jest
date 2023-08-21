const multiplicar = require("./multiply");

test("there is pool in Liverpool", () => {
  expect("Liverpool").toMatch(/pool/);
});

describe("testea la funcion multiplicar", () => {
  test("multiplicar 2*3 deberia ser igual a 6", () => {
    expect(multiplicar(2, 3)).toBe(6);
    expect(multiplicar(2, 3)).toBeGreaterThan(5);
    expect(multiplicar(2, 3)).toBeLessThan(7);
    expect(multiplicar(2, 3)).toBeLessThanOrEqual(6);
  });
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

const carStock = [
  "BMW",
  "Ferrari",
  "Lamborghini",
  "Aston Martin",
  "Porsche",
  "Audi",
];

test("that the carStock hasn't a Ferrari", () => {
  expect(carStock).toContain("Ferrari");
});
