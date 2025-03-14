import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CityCard.css';

const CityCard = ({ id, name, popularity, temperature, weatherCondition, icon, forecast }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/city/${name}`, {
      state: { name, forecast, popularity },
    });
  };

  return (
    <button key={id} className="card h-100 city-card-button" onClick={handleCardClick}>
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt={weatherCondition}
            className="city-card-icon"
          />
          <h5 className="card-title ms-3">{name}</h5>
        </div>
        <div className="d-flex flex-column">
          <p className="card-text">
            <strong>Temperature:</strong> {temperature}°K
          </p>
          <p className="card-text">
            <strong>Weather condition:</strong> {weatherCondition}
          </p>
        </div>
      </div>
    </button>
  );
};

CityCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  popularity: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherCondition: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired,
};

export default CityCard;
