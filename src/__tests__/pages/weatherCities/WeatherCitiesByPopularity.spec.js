
import { render, screen } from '@testing-library/react';
import WeatherCitiesByPopularity from '../../pages/weatherCities/WeatherCitiesByPopularity';

describe('WeatherCitiesByPopularity', () => {
  it('should render the page', () => {
    render(<WeatherCitiesByPopularity />);
    const heading = screen.getByText(/Welcome to WeatherCitiesByPopularity page/i);
    expect(heading).toBeInTheDocument();
  });
});
