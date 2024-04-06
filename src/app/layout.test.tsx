import { render } from "@testing-library/react";
import Layout from "./layout";

describe("Root Layout component", () => {
  it("should render Root Layout unchanged", () => {
    const { container } = render(
      <Layout>
        <div>Test</div>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });
});
