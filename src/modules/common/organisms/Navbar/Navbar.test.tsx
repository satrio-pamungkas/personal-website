import ReactDOM from 'react-dom/client';
import { act, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe("Navbar", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("nav");
    document.body.replaceChildren(container);
  })

  it("Renders nav as root element", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Navbar/>);
    })

    expect(document.querySelector("nav")).not.toBeNull();
  })

  it("Renders single div element as root children", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Navbar/>);
    })
    const listChildren = document.querySelectorAll("nav > div");

    expect(listChildren).toHaveLength(1);
  })

  it("Renders 3 child elements (logo, navbarlist, languagetab)", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Navbar/>);
    })
    const navbarComponent = screen.getByTestId("navbar-div").querySelectorAll("div");
    const logoComponent = navbarComponent[0];
    const navlistComponent = navbarComponent[1];
    const languageComponent = navbarComponent[2];

    expect(logoComponent).toBeInTheDocument();
    expect(navlistComponent).toBeInTheDocument();
    expect(languageComponent).toBeInTheDocument();
  })
})