import React from 'react';
import PropTypes from 'prop-types';
import './ForecastItem.css';
import { formatDateTime } from '../../utils/dateUtils';

const ForecastItem = ({ forecastDay }) => {
  return (
    <div className="timeline-item card mb-3">
      <div className="card-body">
        <div className="forecast-icon-container">
          <img
            src={`https://openweathermap.org/img/wn/${forecastDay.icon}.png`}
            alt={forecastDay.weatherCondition}
            className="forecast-icon"
          />
        </div>

        <h5 className="card-title">
          {formatDateTime(forecastDay.dateTime, 'time')}
        </h5>
        <div className="current-temp">
          <strong>Temp:</strong> {forecastDay.temperature.currentTemperature}°C
        </div>

        <div className="row">
          <div className="col">
            <p className="card-text">
              <strong>Max Temp:</strong>{' '}
              {forecastDay.temperature.maxTemperature}°C
            </p>
          </div>
          <div className="col">
            <p className="card-text">
              <strong>Min Temp:</strong>{' '}
              {forecastDay.temperature.minTemperature}°C
            </p>
          </div>
          <div className="col">
            <p className="card-text">
              <strong>Condition:</strong> {forecastDay.weatherCondition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ForecastItem.propTypes = {
  forecastDay: PropTypes.shape({
    dateTime: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      currentTemperature: PropTypes.number.isRequired,
      minTemperature: PropTypes.number.isRequired,
      maxTemperature: PropTypes.number.isRequired,
    }).isRequired,
    weatherCondition: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastItem;
