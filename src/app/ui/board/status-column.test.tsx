import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import StatusColumn from "./status-column";

describe("StatusColumn component", () => {
  it("renders initial StatusColumn component unchanged", () => {
    const { container } = render(<StatusColumn status="Test Status" />);

    expect(container).toMatchSnapshot();
  });
});
