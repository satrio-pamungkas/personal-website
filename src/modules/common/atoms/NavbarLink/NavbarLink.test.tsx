import { act } from 'react-test-renderer';
import { NavbarLink } from './NavbarLink';
import ReactDOM from 'react-dom/client';
import { screen } from '@testing-library/react';

describe("NavbarLink", () => { 
  const label = "Homepage";
  let container: any;

  beforeEach(() => {
    container = document.createElement("a");
    document.body.replaceChildren(container);
  })

  it("Renders with label name correctly", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <NavbarLink label={label} active={true} />
      );
    })
    
    expect(document.body.textContent).toContain(label);
  })

  it("Renders active component label correctly", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <NavbarLink label={label} active={true} />
      );
    })
    const ahrefComponent = screen.getByTestId("link");

    expect(ahrefComponent).toHaveClass("font-bold");
  })

  it("Renders inactive component label correctly", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <NavbarLink label={label} active={false} />
      );
    })
    const ahrefComponent = screen.getByTestId("link");

    expect(ahrefComponent).toHaveClass("font-regular");
  })
});