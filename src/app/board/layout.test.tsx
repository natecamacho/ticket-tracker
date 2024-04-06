import { render } from "@testing-library/react";
import Layout from "./layout";

describe("Board Layout component", () => {
  it("should render Board Layout unchanged", () => {
    const { container } = render(
      <Layout>
        <div>Test</div>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });
});
