import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getWeatherCities = async (cityName) => {
  try {
    const response = await axios.get(`${API_URL}api/v1/weathercity?q=${cityName}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching weather cities:', error);
    return [];
  }
};
