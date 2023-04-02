import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  let container: any;
  const placeholder = "This is placeholder";
  const weight = "bold";
  const color = "black";
  const align = "center";
  const size = "sm";

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
      <Text fontWeight={weight}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveTextContent(placeholder);
  })

  it("Renders dynamic font weight correctly", () => {
    act(() => {styleRender(
      <Text fontWeight={weight}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveClass("font-bold");
    expect(component).toHaveStyle("font-weight: 700");
  })

  it("Renders dynamic font color correctly", () => {
    act(() => {styleRender(
      <Text fontColor={color}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveClass(`text-${color}`);
  })

  it("Renders dynamic text align correctly", () => {
    act(() => {styleRender(
      <Text textAlign={align}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveClass(`text-${align}`);
    expect(component).toHaveStyle(`text-align: ${align}`);
  })

  it("Renders dynamic font size correctly", () => {
    act(() => {styleRender(
      <Text fontSize={size}>{placeholder}</Text>
    )});
    const component = screen.getByTestId("text");

    expect(component).toHaveClass(`text-${size}`);
    expect(component).toHaveStyle("font-size: 0.875rem")
  })
})