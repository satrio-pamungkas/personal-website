import { Title } from "./Title";
import { act, screen } from "@testing-library/react";
import { styleRender } from "../../configs/test.config";

describe("Title", () => {
  let container: any;
  const text = "placeholder";
  const textWeight = "font-bold";
  const textColor = "text-black";
  const textSize = "text-2xl md:text-4xl";
  const textAlign = "text-left"

  beforeEach(() => {
    container = document.createElement("h1");
    document.body.replaceChildren(container);
  })

  it("Renders h1 as root element", () => {
    act(() => {
      styleRender(<Title textWeight={textWeight}/>);
    })

    expect(document.querySelector("h1")).not.toBeNull();
  })

  it("Renders text correctly", () => {
    act(() => {
      styleRender(
        <Title textWeight={textWeight}>{text}</Title>);
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveTextContent(text);
  })

  it("Renders bold font correctly", () => {
    act(() => {
      styleRender(
        <Title textWeight={textWeight}>{text}</Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass("font-bold");
  })

  it("Renders normal font correctly", () => {
    act(() => {
      styleRender(
        <Title textWeight={"font-normal"}>{text}</Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass("font-normal");
  })

  it("Renders dynamic text color correctly", () => {
    act(() => {
      styleRender(
        <Title textWeight={textWeight} textColor={textColor}>
          {text}
        </Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass(textColor);
  })

  it("Renders dynamic text size correctly", () => {
    act(() => {
      styleRender(
        <Title 
          textWeight={textWeight} 
          textColor={textColor} 
          textSize={textSize}
        >
          {text}
        </Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass(textSize);
  })

  it("Renders dynamic text align correctly", () => {
    act(() => {
      styleRender(
        <Title 
          textWeight={textWeight} 
          textColor={textColor} 
          textAlign={textAlign}>
          {text}
        </Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass(textAlign);
  })
})