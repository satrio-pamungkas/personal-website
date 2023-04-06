import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { PersonalSummary } from "./PersonalSummary";

describe("PersonalSummary", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("section");
    document.body.replaceChildren(container);
  })

  it("Renders section as root element", () => {
    act(() => {styleRender(<PersonalSummary/>)})
    const component = document.querySelector("section");

    expect(component).not.toBeNull();
  })

  it("PersonalSummary data testid is exists", () => {
    act(() => {styleRender(<PersonalSummary/>)})
    const component = screen.getByTestId("personal-summary")

    expect(component).toBeTruthy();
  })

  it("Renders child elements correctly", () => {
    act(() => {styleRender(<PersonalSummary/>)})
    const component = screen.getByTestId("personal-summary");
    const cardAbout = screen.getByTestId("card-about");
    const texts = screen.getAllByTestId("text");

    expect(component).toContainElement(cardAbout);
    texts.forEach(element => {
      expect(component).toContainElement(element);
    });
  })
})