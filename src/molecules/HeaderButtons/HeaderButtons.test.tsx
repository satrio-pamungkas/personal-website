import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { HeaderButtons } from "./HeaderButtons";

describe("HeaderButtons", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders section as root element", () => {
    act(() => {styleRender(<HeaderButtons/>)})
    const component = document.querySelector("div");

    expect(component).not.toBeNull();
  })

  it("Header data testid is exists", () => {
    act(() => {styleRender(<HeaderButtons/>)})
    const component = screen.getByTestId("header-buttons");

    expect(component).toBeTruthy();
  })

  it("Renders child elements are correctly", () => {
    act(() => {styleRender(<HeaderButtons/>)})
    const component = screen.getByTestId("header-buttons");
    const button = screen.getAllByTestId("button");

    button.forEach(element => {
      expect(component).toContainElement(element);
    });
  })
})