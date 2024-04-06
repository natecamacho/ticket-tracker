import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Board from "./page";

describe("Board component", () => {
  it("renders correctly", () => {
    render(<Board />);

    expect(screen.getByText("Team Board")).toBeInTheDocument();

    expect(screen.getByText("Up Next")).toBeInTheDocument();
    expect(screen.getByText("In Progress")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("renders initial Board component unchanged", () => {
    const { container } = render(<Board />);

    expect(container).toMatchSnapshot();
  });
});
