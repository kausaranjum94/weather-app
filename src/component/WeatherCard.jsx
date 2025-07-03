import React from 'react'

 const WeatherCard = ({ loading,  weather }) => {
  return weather ? (
    !loading ? (
      <>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels Like: {weather.main.feels_like}°C</p>
      <p>Min: {weather.main.temp_min}°C / Max: {weather.main.temp_max}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Weather: {weather.weather[0].main} ({weather.weather[0].description})</p>
      </>
    ) : "Weather Data Loading"
  ) : null;
}

export default WeatherCard;
