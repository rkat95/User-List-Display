import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import ErrorDisplay from "../../components/errorDisplay/errorDisplay";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Error Display tests", () => {
  it("should render title container", () => {
    render(<ErrorDisplay errorMessage="Error" />);
    const heading = screen.getByTestId("error-container");
    expect(heading).toBeInTheDocument();
  });

  it("should render title div", () => {
    render(<ErrorDisplay errorMessage="Error" />);
    const heading = screen.getByTestId("error-message");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Error");
  });

  it("should match renderer", () => {
    const tree = renderer
      .create(<ErrorDisplay errorMessage="Error" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
