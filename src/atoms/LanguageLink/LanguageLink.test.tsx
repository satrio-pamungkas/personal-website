import ReactDOM from 'react-dom/client';
import { act } from 'react-test-renderer';
import { LanguageLink } from './LanguageLink';
import { cleanup, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

describe("LanguageLink", () => {
  let container: any;
  const label = "ID";
  const status = true;
  const click = jest.fn();

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  afterEach(cleanup);

  it("Renders a div as root element of list", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <LanguageLink label={label} active={status} onClick={click}/>
      )
    })

    expect(document.querySelector("div")?.firstChild).not.toBeNull();
  })

  it("Renders label correctly", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <LanguageLink label={label} active={status} onClick={click}/>
      )
    })

    expect(document.body.textContent).toContain(label);
  })

  it("Renders active label correctly", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <LanguageLink label={label} active={status} onClick={click}/> 
      )
    })

    const activeComponent = document.querySelector("div")?.firstChild;

    expect(activeComponent).toHaveClass("font-bold");
  })

  it("Handles onClick called correctly", async () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <LanguageLink label={label} active={status} onClick={click}/> 
      )
    })
    const activeComponent = screen.getByTestId("language-link");
    await userEvent.click(activeComponent);

    expect(click).toHaveBeenCalledTimes(1);
  })
})