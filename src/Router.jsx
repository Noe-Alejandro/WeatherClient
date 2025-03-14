import { Routes, Route } from 'react-router-dom';
import WeatherCitiesByPopularityPage from './pages/weatherCities/WeatherCitiesByPopularity';
import CityDetailPage from './pages/weatherCityDetail/CityDetailPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherCitiesByPopularityPage />} />
      <Route path="/city/:cityName" element={<CityDetailPage />} />
    </Routes>
  );
};

export default Router;
