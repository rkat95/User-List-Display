import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import Loader from "../../components/loader/loader";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Loader tests", () => {
  it("should render loader", () => {
    render(<Loader />);
    const heading = screen.getByTestId("loader");
    expect(heading).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<Loader />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
