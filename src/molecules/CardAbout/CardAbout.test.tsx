import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { CardAbout } from "./CardAbout";

describe("CardAbout", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders div as root element", () => {
    act(() => {styleRender(<CardAbout/>)})
    const component = document.querySelector("div");

    expect(component).not.toBeNull();
  })

  it("CardAbout data testid is exists", () => {
    act(() => {styleRender(<CardAbout/>)})
    const component = screen.getByTestId("card-about");

    expect(component).toBeTruthy();
  })

  it("Renders child elements correctly", () => {
    act(() => {styleRender(<CardAbout/>)})
    const component = screen.getByTestId("card-about");
    const texts = screen.getAllByTestId("text");
    const button = screen.getByTestId("button");

    texts.forEach(element => {
      expect(component).toContainElement(element);
    });
    expect(component).toContainElement(button);
  })
})