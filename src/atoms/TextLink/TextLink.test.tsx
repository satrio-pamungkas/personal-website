import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { TextLink } from "./TextLink";

describe("TextLink", () => {
  let container: any;
  const placeholder = "placeholder";
  const color = "text-white";
  const link = "/portfolios";

  beforeEach(() => {
    container = document.createElement("a");
    document.body.replaceChildren(container);
  })

  it("Renders a element as root", () => {
    act(() => {styleRender(<TextLink/>)})
    const component = document.querySelector("a");

    expect(component).not.toBeNull();
  })

  it("TextLink data test id is exists", () => {
    act(() => {styleRender(<TextLink/>)})
    const component = screen.getByTestId("text-link");

    expect(component).toBeTruthy();
  })

  it("Renders text correctly", () => {
    act(() => {
      styleRender(<TextLink>{placeholder}</TextLink>)
    })
    const component = screen.getByTestId("text-link");
    
    expect(component).toHaveTextContent(placeholder);
  })

  it("Renders dynamic font color correctly", () => {
    act(() => {styleRender(
      <TextLink fontColor={color}>{placeholder}</TextLink>
    )})
    const component = screen.getByTestId("text-link");

    expect(component).toHaveClass(color);
  })

  it("Renders link attribute correctly", () => {
    act(() => {styleRender(
      <TextLink link={link} >{placeholder}</TextLink>
    )})
    const component = screen.getByTestId("text-link");

    expect(component.getAttribute('href')).toBe(link);
  })

})