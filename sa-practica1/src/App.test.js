import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/PRACTICA 1 SA/i);
  expect(linkElement).toBeInTheDocument();
});
