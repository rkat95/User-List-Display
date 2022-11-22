import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import PageTitle from "../../components/PageTitle/pageTitle";
import renderer from "react-test-renderer";
import ReorderIcon from "@mui/icons-material/Reorder";

afterEach(cleanup);

function setHeaderIcon() {
  return;
}

const data = {
  title: "users_display_title",
  subtitle: "users_display_subtitle",
  icons: [
    { icon: ReorderIcon, clickParam: "tableView", clickFn: setHeaderIcon },
  ],
};

describe("Page Title tests", () => {
  it("should render title", () => {
    render(<PageTitle data={data} />);
    const container = screen.getByTestId("page-title");
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("users_display_title");
  });

  it("should render title div", () => {
    render(<PageTitle data={data} />);
    const container = screen.getByTestId("page-subtitle");
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("users_display_subtitle");
  });

  it("should match renderer", () => {
    const tree = renderer.create(<PageTitle data={data} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
