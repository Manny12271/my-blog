import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./assets/logo.png', () => '');

test('renders blog header', () => {
  render(<App />);
  const heading = screen.getByText(/my blog/i);
  expect(heading).toBeInTheDocument();
});