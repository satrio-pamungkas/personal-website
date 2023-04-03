import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import fs from 'fs';

const wrapper = ({ children }: any) => {
  return children;
};

export const styleRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const view = render(ui, { wrapper, ...options });

  const style = document.createElement('style');
  style.innerHTML = fs.readFileSync('src/styles/test.css', 'utf8');
  document.head.appendChild(style);

  return view;
};