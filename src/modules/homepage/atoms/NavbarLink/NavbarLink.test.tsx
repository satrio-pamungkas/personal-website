import renderer, { act } from 'react-test-renderer';
import { NavbarLink } from './NavbarLink';
import ReactDOM from 'react-dom/client';

describe("NavbarLink", () => { 
  it("Renders correctly", () => {
    const component = renderer.create(<NavbarLink label="Homepage"/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  }) 

  it("Renders with label name correctly", () => {
    const label = "Homepage";
    const component = (
      <NavbarLink label={label}/>
    );
    const container = document.createElement("a");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.createRoot(container).render(component);
    })
    expect(document.body.textContent).toContain(label);
  })
});