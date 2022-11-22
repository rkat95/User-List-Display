import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import CardView from "../../components/card/cardView";
import renderer from "react-test-renderer";

afterEach(cleanup);

const data = {
  username: "Bret",
  name: "Bret name",
  address: { city: "paris", street: "7 rue", zipcode: "111" },
  company: { name: "company" },
};

describe("Card View tests", () => {
  it("should render username container", () => {
    render(<CardView data={data} />);
    const heading = screen.getByTestId("username");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Bret");
  });
  it("should render labels", () => {
    render(<CardView data={data} />);
    const heading = screen.getAllByTestId("label");
    expect(heading.length).toBe(3);
    expect(heading[0]).toHaveTextContent("name");
    expect(heading[1]).toHaveTextContent("address");
    expect(heading[2]).toHaveTextContent("company");
  });

  it("should render values", () => {
    render(<CardView data={data} />);
    const heading = screen.getAllByTestId("value");
    expect(heading.length).toBe(3);
    expect(heading[0]).toHaveTextContent("Bret name");
    expect(heading[1]).toHaveTextContent("paris");
    expect(heading[2]).toHaveTextContent("company");
  });

  it("should render icons", () => {
    render(<CardView data={data} />);
    const heading = screen.getAllByTestId("icon");
    expect(heading.length).toBe(3);
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<CardView data={data} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
