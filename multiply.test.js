const multiplicar = require("./multiply");

describe("testea la funcion multiplicar", () => {
  test.only("multiplicar 2*3 deberia ser igual a 6", () => {
    expect(multiplicar(2, 3)).toBe(6);
  });
});

test("object assignment", () => {
  const data  = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });

});

test("multiplicar 4*11 no deberia ser igual a 6", () => {
  expect(multiplicar(4, 11)).not.toBe(6);
});