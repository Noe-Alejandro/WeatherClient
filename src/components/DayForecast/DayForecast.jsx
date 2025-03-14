import React from 'react';
import { Collapse } from 'react-bootstrap';
import ForecastItem from '../ForecastItem/ForecastItem';
import PropTypes from 'prop-types';
import './DayForecast.css';
import { formatDateTime } from '../../utils/dateUtils';

const DayForecast = ({
  date,
  forecastByDays,
  expandedDay,
  handleToggleCollapse,
}) => {
  return (
    <div className="timeline-day">
      <button
        className="text-center mb-3"
        onClick={() => handleToggleCollapse(date)}
        aria-expanded={expandedDay === date}
        aria-controls={`collapse-${date}`}
      >
        <span className="date-text">{formatDateTime(date, 'date')}</span>
      </button>

      <Collapse in={expandedDay === date}>
        <div id={`collapse-${date}`} className="timeline-items">
          {forecastByDays.map((forecastDay) => (
            <ForecastItem
              key={forecastDay.dateTime}
              forecastDay={forecastDay}
            />
          ))}
        </div>
      </Collapse>
      <hr />
    </div>
  );
};

DayForecast.propTypes = {
  date: PropTypes.string.isRequired,
  forecastByDays: PropTypes.array.isRequired,
  expandedDay: PropTypes.string.isRequired,
  handleToggleCollapse: PropTypes.func.isRequired,
};

export default DayForecast;
