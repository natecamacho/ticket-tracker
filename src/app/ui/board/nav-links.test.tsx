import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavLinks from "./nav-links";

describe("NavLinks component", () => {
  it("should render NavLinks unchanged", () => {
    const { container } = render(<NavLinks />);

    expect(screen.getByText("Board")).toBeInTheDocument();
    expect(screen.getByText("Tickets")).toBeInTheDocument();
    expect(screen.getByText("Backlog")).toBeInTheDocument();

    expect(screen.getAllByRole("link").length).toEqual(3);
    expect(screen.getByRole("link", { name: /Board/i })).toHaveAttribute(
      "href",
      "/board"
    );
    expect(screen.getByRole("link", { name: /Tickets/i })).toHaveAttribute(
      "href",
      "/tickets"
    );
    expect(screen.getByRole("link", { name: /Backlog/i })).toHaveAttribute(
      "href",
      "/backlog"
    );

    expect(container).toMatchSnapshot();
  });
});
