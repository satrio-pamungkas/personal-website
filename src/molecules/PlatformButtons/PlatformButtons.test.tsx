import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { PlatformButtons } from "./PlatformButtons";

describe("PlatformButtons", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders div as root element", () => {
    act(() => {styleRender(<PlatformButtons/>)});
    const component = document.querySelector("div");

    expect(component).not.toBeNull();
  })

  it("PlatformButtons data testid is exists", () => {
    act(() => {styleRender(<PlatformButtons/>)});
    const component = screen.getByTestId("platform-buttons");

    expect(component).toBeTruthy();
  })

  it("Renders child element correctly", () => {
    act(() => {styleRender(<PlatformButtons/>)});
    const component = screen.getByTestId("platform-buttons");
    const buttonIcons = screen.getAllByTestId("button-icon");

    buttonIcons.forEach(element => {
      expect(component).toContainElement(element);
    });
  })
})