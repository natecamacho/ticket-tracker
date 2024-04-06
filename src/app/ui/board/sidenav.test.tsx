import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SideNav from "./sidenav";

describe("SideNav component", () => {
  it("should render sidenav unchanged", () => {
    const { container } = render(<SideNav />);

    expect(screen.getByText("Nate's Ticket Tracker")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
