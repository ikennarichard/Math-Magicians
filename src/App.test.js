import {
  fireEvent, render, screen, within,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Calculator from './components/Calculator';

test('renders math magicians to page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const heading = screen.getAllByText(/math magicians/i);
  expect(heading[0]).toBeInTheDocument();
});

test('test clicked element text renders on screen', () => {
  render(
    <>
      <Calculator />
    </>,
  );
  fireEvent.click(screen.getByText('9'));
  const { getByText } = within(screen.getByTestId('output'));
  expect(getByText('9')).toBeInTheDocument();
  screen.debug();
});
