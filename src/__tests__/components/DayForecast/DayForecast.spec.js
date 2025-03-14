import React from 'react';
import { render, screen } from '@testing-library/react';
import DayForecast from '../../components/DayForecast/DayForecast';

describe('DayForecast', () => {
  test('debería renderizar el componente correctamente', () => {
    render(<DayForecast />);
    expect(screen.getByText('DayForecast')).toBeInTheDocument();
  });
});
