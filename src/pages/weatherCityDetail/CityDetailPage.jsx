import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DayForecast from '../../components/DayForecast/DayForecast';
import './CityDetailPage.css';

const CityDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [expandedDay, setExpandedDay] = useState(null);

  if (!state) {
    return <p>No city data found!</p>;
  }

  const { name, popularity, forecast } = state;

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleToggleCollapse = (date) => {
    if (expandedDay === date) {
      setExpandedDay(null);
    } else {
      setExpandedDay(date);
    }
  };

  return (
    <div className="container mt-5">
      <button
        className="btn btn-link position-absolute"
        style={{
          top: '15px',
          left: '15px',
          fontSize: '24px',
          background: 'transparent',
        }}
        onClick={handleBackClick}
      >
        <i className="fas fa-arrow-left"></i>
      </button>

      <h1 className="mb-4 text-center">Weather Forecast for {name}</h1>
      <div className="mb-4 text-center">
        <h4>Popularity: {(popularity * 100).toFixed(2)}%</h4>
      </div>

      <h3>Weather Forecast Timeline</h3>
      <div className="timeline">
        {forecast.map((forecastByDay) => {
          return (
            <DayForecast
              key={forecastByDay.date}
              date={forecastByDay.date}
              forecastByDays={forecastByDay.weatherByDateTime}
              expandedDay={expandedDay}
              handleToggleCollapse={handleToggleCollapse}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CityDetailPage;
