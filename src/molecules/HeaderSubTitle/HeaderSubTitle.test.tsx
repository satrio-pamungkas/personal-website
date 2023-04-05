import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { HeaderSubTitle } from "./HeaderSubTitle";

describe("HeaderSubTitle", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders div as root element", () => {
    act(() => {styleRender(<HeaderSubTitle/>)})
    const component = document.querySelector("div");

    expect(component).not.toBeNull();
  })

  it("HeaderSubTitle data testid is exists", () => {
    act(() => {styleRender(<HeaderSubTitle/>)})
    const component = screen.getByTestId("header-sub-title");

    expect(component).toBeTruthy();
  })

  it("Renders child elements correctly", () => {
    act(() => {styleRender(<HeaderSubTitle/>)})
    const component = screen.getByTestId("header-sub-title");
    const subtitle = screen.getAllByTestId("subtitle");
    const text = screen.getByTestId("text");

    subtitle.forEach(element => {
      expect(component).toContainElement(element);
    });
    expect(component).toContainElement(text)
  })
})