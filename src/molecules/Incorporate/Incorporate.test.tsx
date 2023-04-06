import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { Incorporate } from "./Incorporate";

describe("Incorporate", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders div as root element", () => {
    act(() => {styleRender(<Incorporate/>)});
    const component = document.querySelector("div");

    expect(component).not.toBeNull();
  })

  it("Incorporate data testid is exists", () => {
    act(() => {styleRender(<Incorporate/>)})
    const component = screen.getByTestId("incorporate");

    expect(component).toBeTruthy();
  })

  it("Renders child element correctly", () => {
    act(() => {styleRender(<Incorporate/>)})
    const component = screen.getByTestId("incorporate");
    const image = screen.getByTestId("image");
    const text = screen.getByTestId("text");

    expect(component).toContainElement(image);
    expect(component).toContainElement(text);
  })
})