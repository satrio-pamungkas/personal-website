import { act } from 'react-test-renderer';
import { NavbarLink } from './NavbarLink';
import ReactDOM from 'react-dom/client';
import { screen } from '@testing-library/react';

describe("NavbarLink", () => { 
  const label = "Projects";
  const link = "/projects"
  let container: any;

  beforeEach(() => {
    container = document.createElement("a");
    document.body.replaceChildren(container);
  })

  it("Renders with label name correctly", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <NavbarLink label={label} active={true} link={link} />
      );
    })
    
    expect(document.body.textContent).toContain(label);
  })

  it("Renders active component label correctly", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <NavbarLink label={label} active={true} link={link} />
      );
    })
    const ahrefComponent = screen.getByTestId("link");

    expect(ahrefComponent).toHaveClass("font-bold");
  })

  it("Renders inactive component label correctly", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <NavbarLink label={label} active={false} link={link} />
      );
    })
    const ahrefComponent = screen.getByTestId("link");

    expect(ahrefComponent).toHaveClass("font-regular");
  })
});