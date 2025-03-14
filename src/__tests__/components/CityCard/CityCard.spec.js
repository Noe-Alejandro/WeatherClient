import React from 'react';
import { render, screen } from '@testing-library/react';
import CityCard from '../../components/CityCard/CityCard';

describe('CityCard', () => {
  test('debería renderizar el componente correctamente', () => {
    render(<CityCard />);
    expect(screen.getByText('CityCard')).toBeInTheDocument();
  });
});
