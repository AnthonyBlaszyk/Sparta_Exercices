import { helloSailor } from "./index";

test("Log the expected string with a name", () => {
  expect.assertions(2);

  const spy = jest.spyOn(console, "log");
  spy.mockImplementation(() => {});
  helloSailor("Ysera");

  expect(spy).toBeCalled();
  expect(spy).toBeCalledWith("Howdy Ysera!");
  spy.mockRestore();
});

test("Log the expected string without a name", () => {
  expect.assertions(2);

  const spy = jest.spyOn(console, "log");
  spy.mockImplementation(() => {});
  helloSailor();

  expect(spy).toBeCalled();
  expect(spy).toBeCalledWith("Howdy Sailor! Good day to you!");
  spy.mockRestore();
});
