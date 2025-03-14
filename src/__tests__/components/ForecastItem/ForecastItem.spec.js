import React from 'react';
import { render, screen } from '@testing-library/react';
import ForecastItem from '../../../components/ForecastItem/ForecastItem';

describe('ForecastItem', () => {
  test('debería renderizar el componente correctamente', () => {
    render(
      <ForecastItem
        forecastDay={{
          dateTime: '2025-03-14T18:00:00',
          temperature: {
            currentTemperature: 297.03,
            minTemperature: 297.03,
            maxTemperature: 298.93,
          },
          weatherCondition: 'clear sky',
          icon: '01d',
        }}
      />
    );
    expect(screen.getByText('06:00 PM')).toBeInTheDocument();
  });
});
