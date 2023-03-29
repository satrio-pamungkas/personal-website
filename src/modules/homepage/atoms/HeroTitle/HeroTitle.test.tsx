import { HeroTitle } from "./HeroTitle";
import ReactDOM from "react-dom/client";
import { act, screen } from "@testing-library/react";

describe("HeroTitle", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("h1");
    document.body.replaceChildren(container);
  })

  it("Renders h1 as root element", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<HeroTitle bold={false}/>);
    })

    expect(document.querySelector("h1")).not.toBeNull();
  })

  it("Renders text correctly", () => {
    const text = "Hello World";
    act(() => {
      ReactDOM.createRoot(container).render(
        <HeroTitle bold={false}>{text}</HeroTitle>
      );
    })

    const component = document.querySelector("h1");

    expect(component).toHaveTextContent(text);
  })

  it("Renders bold font correctly", () => {
    const bold = "This text is bold";
    act(() => {
      ReactDOM.createRoot(container).render(
        <HeroTitle bold={true}>{bold}</HeroTitle>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass("font-bold");
  })

  it("Renders normal font correctly", () => {
    const normal = "This text is normal";
    act(() => {
      ReactDOM.createRoot(container).render(
        <HeroTitle bold={false}>{normal}</HeroTitle>
      );
    })

    const component = screen.getByTestId("hero-title");

    expect(component).toHaveClass("font-normal");
  })
})