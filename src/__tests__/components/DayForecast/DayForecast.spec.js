import React from 'react';
import { render, screen } from '@testing-library/react';
import DayForecast from '../../../components/DayForecast/DayForecast';

describe('DayForecast', () => {
  test('should render the component correctly', () => {
    render(<DayForecast
      date="2025-03-14"
      forecastByDays={[]}
      expandedDay="2025-03-14"
      handleToggleCollapse={() => {}} />);
    expect(screen.getByText('14/03/2025')).toBeInTheDocument();
  });
});
