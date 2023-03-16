import ReactDOM from 'react-dom/client';
import renderer, { act } from 'react-test-renderer';
import { NavbarList } from './NavbarList';

describe("NavbarList", () => {
  let container: any;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders a div as root element of list", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<NavbarList/>)
    })
    expect(document.querySelector("div")).not.toBeNull();
  })

  it("Renders an ul element to display label list", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<NavbarList/>)
    })
    expect(document.querySelector("ul")).not.toBeNull();
  })
});