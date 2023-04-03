import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { SubTitle } from "./SubTitle";

describe("SubTitle", () => {
  let container: any;
  const placeholder = "placeholder";
  const weight = "bold";
  const color = "text-white";
  const align = "center";
  const size = "lg";

  beforeEach(() => {
    container = document.createElement("h2");
    document.body.replaceChildren(container);
  })

  it("Renders h2 as root element", () => {
    act(() => {styleRender(<SubTitle/>)});
    const component = document.querySelector("h2");

    expect(component).not.toBeNull();
  })

  it("SubTitle data test id exists", () => {
    act(() => {styleRender(<SubTitle/>)});
    const component = screen.getByTestId("subtitle");

    expect(component).toBeTruthy();
  })

  it("Renders text correctly", () => {
    act(() => {styleRender(
      <SubTitle>{placeholder}</SubTitle>
    )})
    const component = screen.getByTestId("subtitle");

    expect(component).toHaveTextContent(placeholder);
  })

  it("Renders dynamic font weight correctly", () => {
    act(() => {styleRender(
      <SubTitle fontWeight={weight}>{placeholder}</SubTitle>
    )});
    const component = screen.getByTestId("subtitle");

    expect(component).toHaveClass("font-bold");
    expect(component).toHaveStyle("font-weight: 700");
  })

  it("Renders dynamic font color correctly", () => {
    act(() => {styleRender(
      <SubTitle fontColor={color}>{placeholder}</SubTitle>
    )})
    const component = screen.getByTestId("subtitle");

    expect(component).toHaveClass(color);
  })

  it("Renders text align correctly", () => {
    act(() => {styleRender(
      <SubTitle textAlign={align}>{placeholder}</SubTitle>
    )})
    const component = screen.getByTestId("subtitle");

    expect(component).toHaveClass(`text-${align}`);
    expect(component).toHaveStyle(`text-align: ${align}`);
  })

  it("Renders dynamic font size correctly", () => {
    act(() => {styleRender(
      <SubTitle fontSize={size}>{placeholder}</SubTitle>
    )})
    const component = screen.getByTestId("subtitle");

    expect(component).toHaveClass(`text-md md:text-${size}`);
    expect(component).toHaveStyle("font-size: 1.17em");
  })
})