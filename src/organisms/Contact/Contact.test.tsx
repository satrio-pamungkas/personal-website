import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { Contact } from "./Contact";

describe("Contact", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("section");
    document.body.replaceChildren(container);
  })

  it("Renders section as root element", () => {
    act(() => {styleRender(<Contact/>)});
    const component = document.querySelector("section");

    expect(component).not.toBeNull();
  })

  it("Contact data testid is exists", () => {
    act(() => {styleRender(<Contact/>)});
    const component = screen.getByTestId("contact");

    expect(component).toBeTruthy();
  })

  it("Renders child element correctly", () => {
    act(() => {styleRender(<Contact/>)});
    const component = screen.getByTestId("contact");
    const headerContact = screen.getByTestId("header-contact");
    const platformButtons = screen.getByTestId("platform-buttons");
    const incorporate = screen.getByTestId("incorporate");

    expect(component).toContainElement(headerContact);
    expect(component).toContainElement(platformButtons);
    expect(component).toContainElement(incorporate);
  })
})