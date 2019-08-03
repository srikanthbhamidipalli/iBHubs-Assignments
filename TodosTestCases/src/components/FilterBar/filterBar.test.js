import { render } from "@testing-library/react";

describe("Filter Bar test cases", () => {
  it("should check for the functionality of clear completed", () => {
    const { getByTestId } = render(<FilterBar />);
    const clearCompleted = getByTestId("clear-completed");
    expect(clearCompleted).toBeDefined();
  });
});
