import ReactDOM from 'react-dom/client';
import { act, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import React from 'react';

const linkLabels = [
  { id: 1, label: "Homepage", link: "/", active: false },
  { id: 2, label: "Projects", link: "/projects", active: false },
  { id: 3, label: "Publications", link: "/publications", active: false },
  { id: 4, label: "Resume", link: "/resume", active: false },
  { id: 5, label: "About Me", link: "/about", active: false }
];

jest.mock('next/router', () => ({
  useRouter: () => {
    return {
      route: '',
      pathname: 'beranda'
    }
  },
  useState: jest.fn()
}))

const useStateSpy = jest.spyOn(React, 'useState');

describe("Navbar", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("nav");
    document.body.replaceChildren(container);
    useStateSpy.mockReturnValue([linkLabels, jest.fn()]);
  })

  afterEach(() => {
    useStateSpy.mockRestore();
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