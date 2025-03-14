import React from 'react';
import { render, screen } from '@testing-library/react';
import ForecastItem from '../../components/ForecastItem/ForecastItem';

describe('ForecastItem', () => {
  test('debería renderizar el componente correctamente', () => {
    render(<ForecastItem />);
    expect(screen.getByText('ForecastItem')).toBeInTheDocument();
  });
});
