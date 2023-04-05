import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("section");
    document.body.replaceChildren(container);
  })

  it("Renders section as root element", () => {
    act(() => {styleRender(<Header/>)})
    const component = document.querySelector("section");

    expect(component).not.toBeNull();
  })

  it("Header data testid is exists", () => {
    act(() => {styleRender(<Header/>)})
    const component = screen.getByTestId("header");

    expect(component).toBeTruthy();
  })

  it("Renders child element correctly", () => {
    act(() => {styleRender(<Header/>)})
    const component = screen.getByTestId("header");
    const title = screen.getByTestId("header-title");
    const subtitle = screen.getByTestId("header-sub-title");
    const image = screen.getByTestId("image");

    expect(component).toContainElement(title);
    expect(component).toContainElement(subtitle);
    expect(component).toContainElement(image);
  })
})