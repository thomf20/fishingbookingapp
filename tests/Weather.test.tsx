import { render, screen } from '@testing-library/react';
import WeatherCard from '../components/WeatherCard';

test('displays "Loading forecast..." before data is loaded', () => {
  render(<WeatherCard />);
  const loadingText = screen.getByText(/Loading forecast.../i);
  expect(loadingText).toBeInTheDocument();
});
