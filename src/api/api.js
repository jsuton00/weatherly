import axios from 'axios';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchPosition = () => {
  return new Promise((resolve, reject) => {
    return navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const fetchWeatherData = async (latitude, longitude) => {
  return await axios.get(
    `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
  );
};

export const searchLocalWeather = async (searchTerm) => {
  return await axios.get(
    `api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${API_KEY}`,
  );
};
