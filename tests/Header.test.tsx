import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders the header with correct text', () => {
  render(<Header />);
  const heading = screen.getByText('Fishing Boat Booking App');
  expect(heading).toBeInTheDocument();
});
