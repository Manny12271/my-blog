import { test, expect, vi } from 'vitest'; 
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

vi.mock('./assets/logo.png', () => ({
  default: ''
}));

test('renders blog header', () => {
  render(<App />);
  const heading = screen.getByText(/manuel's blog/i);
  expect(heading).toBeInTheDocument();
});