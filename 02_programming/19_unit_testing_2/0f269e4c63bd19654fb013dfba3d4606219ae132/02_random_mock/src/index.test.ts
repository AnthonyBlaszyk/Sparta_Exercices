import { getRandomUser } from "./index";

test("Return the first user", () => {
  expect.assertions(2);

  const spy = jest.spyOn(Math, "random");
  spy.mockImplementation(() => 0);
  let randomUser = getRandomUser(["Frieda", "Francis", "Frederic"]);
  expect(randomUser).toBe("Frieda");
  randomUser = getRandomUser(["Tyrande", "Frieda", "Francis", "Frederic", "Alexstrasza", "Ysera"]);
  expect(randomUser).toBe("Tyrande");

  spy.mockRestore();
});

test("Return the last user", () => {
  expect.assertions(2);

  const spy = jest.spyOn(Math, "random");
  spy.mockImplementation(() => 1);
  let randomUser = getRandomUser(["Frieda", "Francis", "Frederic", "Alexstrasza", "Ysera"]);
  expect(randomUser).toBe("Ysera");
  randomUser = getRandomUser(["Frieda", "Francis", "Frederic", "Alexstrasza", "Ysera", "Tyrande"]);
  expect(randomUser).toBe("Tyrande");

  spy.mockRestore();
});
