import { RenderOptions, render } from '@testing-library/react';
import { JSXElementConstructor, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const ThemeDS = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const wrapperRender = (
  component: ReactElement<string | JSXElementConstructor<Element>>,
  options?: Omit<RenderOptions<typeof import('@testing-library/dom/types/queries')>, 'wrapper'>
) => render(component, { wrapper: ThemeDS, ...options });

export { wrapperRender };