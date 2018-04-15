import axios from 'axios';

const API_KEY = "0ed67cd6c07a7b2043a1a80d66fa04d6";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},de`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}