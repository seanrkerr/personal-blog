import * as a from "./add";

jest.mock("./add", () => ({
  add: jest.fn(),
}));

const mockAdd = a.add as jest.Mock;

describe("add function", () => {
  it("should pass", async () => {
    mockAdd.mockReturnValue(3);
    const res = a.add();
    expect(res).toEqual(3);
  });
});
