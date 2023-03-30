import { Title } from "./Title";
import ReactDOM from "react-dom/client";
import { act, screen } from "@testing-library/react";

describe("Title", () => {
  let container: any;
  const text = "placeholder";

  beforeEach(() => {
    container = document.createElement("h1");
    document.body.replaceChildren(container);
  })

  it("Renders h1 as root element", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Title bold={false}/>);
    })

    expect(document.querySelector("h1")).not.toBeNull();
  })

  it("Renders text correctly", () => {
    const text = "Hello World";
    act(() => {
      ReactDOM.createRoot(container).render(
        <Title bold={false}>{text}</Title>
      );
    })

    const component = document.querySelector("h1");

    expect(component).toHaveTextContent(text);
  })

  it("Renders bold font correctly", () => {
    const bold = "This text is bold";
    act(() => {
      ReactDOM.createRoot(container).render(
        <Title bold={true}>{bold}</Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass("font-bold");
  })

  it("Renders normal font correctly", () => {
    const normal = "This text is normal";
    act(() => {
      ReactDOM.createRoot(container).render(
        <Title bold={false}>{normal}</Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass("font-normal");
  })

  it("Renders dynamic text color correctly", () => {
    const color = "white"
    act(() => {
      ReactDOM.createRoot(container).render(
        <Title bold={false} textColor={color}>
          {text}
        </Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass(`text-${color}`);
  })

  it("Renders dynamic text size correctly", () => {
    const size = "3xl"
    act(() => {
      ReactDOM.createRoot(container).render(
        <Title bold={false} textColor="white" textSize={size}>
          {text}
        </Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass(`md:text-${size}`);
    expect(component).toHaveClass(`text-xl`);
  })

  it("Renders dynamic text align correctly", () => {
    const align = "left";
    act(() => {
      ReactDOM.createRoot(container).render(
        <Title bold={false} textColor="white" textAlign={align}>
          {text}
        </Title>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass(`text-${align}`);
  })
})