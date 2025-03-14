import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CityCard from '../../../components/CityCard/CityCard';

describe('CityCard', () => {
  test('should render the component correctly', () => {
    render(
      <MemoryRouter>
        <CityCard
          id="1"
          name="Test City"
          popularity={0.85}
          temperature={25}
          weatherCondition="Sunny"
          icon="sunny-icon"
          forecast={[]}
        />
      </MemoryRouter>
    );
    expect(screen.getByText('Test City')).toBeInTheDocument();
  });
});
