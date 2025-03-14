
import { render, screen } from '@testing-library/react';
import CityDetailPage from '../../../pages/weatherCityDetail/CityDetailPage';

describe('CityDetailPage', () => {
  it('should render the page', () => {
    render(<CityDetailPage />);
    const heading = screen.getByText('Weather Cities order by Popularity');
    expect(heading).toBeInTheDocument();
  });
});
