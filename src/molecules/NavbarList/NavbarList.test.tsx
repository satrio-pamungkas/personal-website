import ReactDOM from 'react-dom/client';
import { act } from 'react-test-renderer';
import { NavbarList } from './NavbarList';

describe("NavbarList", () => {
  let container: any;
  const linkLabels = [
    { id: 1, label: "Homepage", link: "/", active: false },
    { id: 2, label: "Projects", link: "/projects", active: false },
    { id: 3, label: "Publications", link: "/publications", active: false },
    { id: 4, label: "Resume", link: "/resume", active: false },
    { id: 5, label: "About Me", link: "/about", active: false }
  ];

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders a div as root element of list", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<NavbarList list={linkLabels} />)
    })
    expect(document.querySelector("div")).not.toBeNull();
  })

  it("Renders an ul element to display label list", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<NavbarList list={linkLabels} />)
    })
    expect(document.querySelector("ul")).not.toBeNull();
  })

  it("Renders li elements to display corresponding label", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <NavbarList list={linkLabels}/>
      )
    })
  
    const listChildren = document.querySelectorAll("ul > li");
    expect(listChildren).toHaveLength(5);
  })

  it("Renders the name of label and link correctly", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <NavbarList list={linkLabels} />
      )
    })

    const listChildren = document.querySelectorAll("li");
    expect(listChildren[0].textContent).toEqual(linkLabels[0].label)
  })
});