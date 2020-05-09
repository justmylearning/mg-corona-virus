import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /Discovery all the numbers related to the corona virus in your country!/i
  );
  expect(linkElement).toBeInTheDocument();
});
