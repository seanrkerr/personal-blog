import Employee from "./Employee";

describe("some class", () => {
  it("should pass", async () => {
    const theResponseIExpect = { salary: 2000 };
    const SomeClientOfSomething = {
      request: jest.fn().mockResolvedValueOnce({ data: theResponseIExpect }),
    };
    const theSomeTest = new Employee(SomeClientOfSomething);
    const actual = await theSomeTest.getSalary("12");
    expect(actual).toEqual(theResponseIExpect);
    expect(SomeClientOfSomething.request).toBeCalledWith(
      "GET",
      "/users/details/12"
    );
  });
});
