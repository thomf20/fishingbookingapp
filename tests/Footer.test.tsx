import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders the footer with correct text', () => {
  render(<Footer />);
  const footerText = screen.getByText(/© 2024 Fishing Booking App. All rights reserved./i);
  expect(footerText).toBeInTheDocument();
});
