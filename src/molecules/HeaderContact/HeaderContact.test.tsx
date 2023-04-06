import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { HeaderContact } from "./HeaderContact";

describe("HeaderContact", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders div as root element", () => {
    act(() => {styleRender(<HeaderContact/>)});
    const component = document.querySelector("div");

    expect(component).not.toBeNull();
  })

  it("HeaderContact data testid is exists", () => {
    act(() => {styleRender(<HeaderContact/>)});
    const component = screen.getByTestId("header-contact");

    expect(component).toBeTruthy();
  })

  it("Renders child elements correctly", () => {
    act(() => {styleRender(<HeaderContact/>)});
    const component = screen.getByTestId("header-contact");
    const title = screen.getByTestId("title");
    const text = screen.getByTestId("text");

    expect(component).toContainElement(title);
    expect(component).toContainElement(text);
  })
})