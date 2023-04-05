import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  let container: any;
  const placeholder = "This is placeholder";
  const weight = "font-bold";
  const color = "text-black";
  const align = "text-center";
  const size = "text-sm";

  beforeEach(() => {
    container = document.createElement("p");
    document.body.replaceChildren(container);
  })

  it("Renders p as root element", () => {
    act(() => {styleRender(
      <Text>{placeholder}</Text>
    )});
    const component = document.querySelector("p");

    expect(component).not.toBeNull();
  })

  it("Renders text correctly", () => {
    act(() => {styleRender(
      <Text textWeight={weight}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveTextContent(placeholder);
  })

  it("Renders dynamic font weight correctly", () => {
    act(() => {styleRender(
      <Text textWeight={weight}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveClass("font-bold");
    expect(component).toHaveStyle("font-weight: 700");
  })

  it("Renders dynamic font color correctly", () => {
    act(() => {styleRender(
      <Text textColor={color}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveClass(color);
  })

  it("Renders dynamic text align correctly", () => {
    act(() => {styleRender(
      <Text textAlign={align}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveClass(align);
    expect(component).toHaveStyle("text-align: center");
  })

  it("Renders dynamic font size correctly", () => {
    act(() => {styleRender(
      <Text textSize={size}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveClass(size);
    expect(component).toHaveStyle("font-size: 0.875rem")
  })
})