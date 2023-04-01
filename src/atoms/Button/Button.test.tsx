import { styleRender } from "../../utils/test.config";
import { act, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Button } from "./Button";
import { BsFill0CircleFill } from "react-icons/bs";
import { themes } from "./Button.util";

describe("Button", () => {
  let container: any;
  const placeholder = "placeholder";
  const color = "primary"
  const click = jest.fn();

  beforeEach(() => {
    container = document.createElement("button");
    document.body.replaceChildren(container);
  })

  afterEach(cleanup);

  it("Renders button as root element", () => {
    act(() => {styleRender(<Button/>)});
    const component = document.querySelector("button");

    expect(component).not.toBeNull();
  })

  it("Button test id exists", () => {
    act(() => {styleRender(<Button/>)});

    expect(screen.getByTestId("button")).toBeTruthy();
  })

  it("Renders button with text correctly", () => {
    act(() => {styleRender(
      <Button>{placeholder}</Button>)
    });
    const component = screen.getByTestId("button");

    expect(component).toHaveTextContent(placeholder);
  })

  it("Renders button with dynamic style color", () => {
    act(() => {styleRender(
      <Button styleColor={color}>{placeholder}</Button>)
    });
    const component = screen.getByTestId("button");

    expect(component).toHaveClass(themes.primary);
  })

  it("Renders button with dynamic icon", () => {
    act(() => {styleRender(
      <Button icon={<BsFill0CircleFill data-testid="icon"/>}>
        {placeholder}
      </Button>)
    });
    const component = screen.getByTestId("button");
    const icon = screen.getByTestId("icon");

    expect(component).toContainElement(icon);
  })

  it("Handles onClick calling correctly", async () => {
    act(() => {styleRender(
      <Button onClick={click}>
        {placeholder}
      </Button>)
    });
    const component = screen.getByTestId("button");
    await userEvent.click(component);

    expect(click).toHaveBeenCalled();
    expect(click).toHaveBeenCalledTimes(1);
  })
})