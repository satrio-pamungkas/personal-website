import ReactDOM from 'react-dom/client';
import { LanguageTab } from './LanguageTab';
import { act } from 'react-test-renderer';
import { getByText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("LanguageTab", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  })

  it("Renders a div element as a root", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<LanguageTab/>)
    })

    expect(document.querySelector("div")).not.toBeNull();
  })

  it("Renders two language link components", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<LanguageTab/>)
    })
    const tabComponent = screen.getByTestId("language-tab").childElementCount;

    expect(tabComponent).toEqual(2);
  })

  it("Renders dynamic language link component", async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<LanguageTab/>)
    })
    const tabComponent = screen.getByTestId("language-tab").querySelectorAll("div");
    const idComponent = tabComponent[0];
    const enComponent = tabComponent[1];
    await userEvent.click(enComponent);

    expect(idComponent).toHaveClass("font-regular");
    expect(enComponent).toHaveClass("font-bold");
  })
})