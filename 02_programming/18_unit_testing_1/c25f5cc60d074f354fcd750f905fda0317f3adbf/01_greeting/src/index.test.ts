import { greet } from "./index";

test("greet someone", function () {
  const result = greet("toto");

  expect(result).toBe("Hello TOTO!");
});

test("greet the world", function () {
  const result = greet();
  expect(result).toBe("Hello WORLD!");
});
