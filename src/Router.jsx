import { Routes, Route } from 'react-router-dom';
import WeatherCitiesByPopularityPage from './pages/weatherCities/WeatherCitiesByPopularity';
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherCitiesByPopularityPage />} />
    </Routes>
  );
};

export default Router;
