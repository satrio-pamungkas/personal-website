import { styleRender } from "../../configs/test.config";
import { act, screen } from "@testing-library/react";
import { ButtonIcon } from "./ButtonIcon";
import { BsFill0CircleFill } from "react-icons/bs";

describe("ButtonIcon", () => {
  let container: any;
  
  beforeEach(() => {
    container = document.createElement("button");
    document.body.replaceChildren(container);
  })

  it("Renders div as root element", () => {
    act(() => {styleRender(<ButtonIcon/>)})
    const component = document.querySelector("button");

    expect(component).not.toBeNull();
  })

  it("ButtonIcon data testid is exists", () => {
    act(() => {styleRender(<ButtonIcon/>)})
    const component = screen.getByTestId("button-icon");

    expect(component).toBeTruthy();
  })

  it("Renders with dynamic icon", () => {
    act(() => {styleRender(
      <ButtonIcon 
        icon={<BsFill0CircleFill data-testid="icon"/>} 
      />
    )})
    const component = screen.getByTestId("button-icon");
    const icon = screen.getByTestId("icon");

    expect(component).toContainElement(icon);
  })
})