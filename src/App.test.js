import { render, screen } from '@testing-library/react';
import App from './App';

test('renders math magicians to page', () => {
  render(<App />);
  const heading = screen.getByText(/math magicians/i);
  expect(heading).toBeInTheDocument();
});
