import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { HeaderTitle } from "./HeaderTitle";

describe("HeaderTitle", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders div as root element", () => {
    act(() => {styleRender(<HeaderTitle/>)})
    const component = document.querySelector("div");

    expect(component).not.toBeNull();
  })

  it("HeaderTitle data testid is exists", () => {
    act(() => {styleRender(<HeaderTitle/>)})
    const component = screen.getByTestId("header-title");

    expect(component).toBeTruthy();
  })

  it("Renders child element correctly", () => {
    act(() => {styleRender(<HeaderTitle/>)})
    const component = screen.getByTestId("header-title");
    const children = screen.getAllByTestId("title");

    children.forEach(element => {
      expect(component).toContainElement(element);
    });
  })
})