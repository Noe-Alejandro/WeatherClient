import React, { useEffect, useState } from 'react';
import { getWeatherCities } from '../../services/weatherService';
import CityCard from '../../components/CityCard/CityCard';

const WeatherCitiesByPopularityPage = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchWeatherCities = async (query = '') => {
    const weatherCities = await getWeatherCities(query);
    setCities(weatherCities);
  };

  useEffect(() => {
    fetchWeatherCities();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchWeatherCities(searchTerm);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Weather Cities order by Popularity</h1>

      <form onSubmit={handleSearchSubmit} className="mb-4 text-center">
        <input
          type="text"
          placeholder="City Name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control"
          style={{ maxWidth: '300px', margin: '0 auto' }}
        />
      </form>

      <div className="row">
        {cities.length > 0 ? (
          cities.map((city) => (
            <div key={city.id} className="col-md-4 mb-4">
              <CityCard
                id={city.id}
                name={city.city_name}
                popularity={city.popularity}
                temperature={
                  city.foreCast[0].weatherByDateTime[0].temperature
                    .currentTemperature
                }
                weatherCondition={
                  city.foreCast[0].weatherByDateTime[0].weatherCondition
                }
                icon={city.foreCast[0].weatherByDateTime[0].icon}
                forecast={city.foreCast}
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCitiesByPopularityPage;
