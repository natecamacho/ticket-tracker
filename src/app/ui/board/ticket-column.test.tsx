import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TicketColumn from "./ticket-column";

describe("TicketColumn component", () => {
  it("renders initial TicketColumn component unchanged", () => {
    const { container } = render(<TicketColumn />);

    expect(container).toMatchSnapshot();
  });
});
