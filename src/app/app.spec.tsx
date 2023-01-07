import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app';

describe('App', () => {
  it('should render successfully', () => {
    // https://testing-library.com/docs/example-react-router/
    const { baseElement } = render(<App />, { wrapper: BrowserRouter });
    expect(baseElement).toBeTruthy();
  });

  it('should contain test', () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter });
    expect(getByText(/Szépség és egészség/gi)).toBeTruthy();
  });
});
