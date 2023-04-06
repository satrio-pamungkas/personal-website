import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { CtaDownload } from "./CtaDownload";

describe("CtaDownload", () => {
  let container: any;

  beforeEach(() => {
    container = document.querySelector("section");
    document.body.replaceChildren(container);
  })

  it("Renders section as root element", () => {
    act(() => {styleRender(<CtaDownload/>)})
    const component = document.querySelector("section");

    expect(component).not.toBeNull();
  })

  it("CtaDownload data testid is exists", () => {
    act(() => {styleRender(<CtaDownload/>)})
    const component = screen.getByTestId("cta-download");

    expect(component).toBeTruthy();
  })

  it("Renders child element correctly", () => {
    act(() => {styleRender(<CtaDownload/>)})
    const component = screen.getByTestId("cta-download");
    const title = screen.getByTestId("title");
    const subtitle = screen.getByTestId("text");
    const buttons = screen.getAllByTestId("button");

    expect(component).toContainElement(title);
    expect(component).toContainElement(subtitle);
    buttons.forEach(element => {
      expect(component).toContainElement(element);
    });
  })
})