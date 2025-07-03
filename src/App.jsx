import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './component/SearchBar';
import WeatherCard from './component/WeatherCard';
import ErrorBoundary from  './component/ErrorBoundary';

function App() {
  const [error, setError] = useState(null);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(null);

  const [forcast, setForcast] = useState(null);

  const fetchForecast = () => {
    try{
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      const data = response.json();
      setForcast(data);
    }catch(error){
      setError("Error Fetching Forecast");
    }
  }

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true)
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

      const data = await response.json();
      setWeather(data);
      console.log("Weather key Data", data);
      setError(null);
    } catch (error) {
      setError("City not found or network error")
      setWeather(null);
    }
    setLoading(false)
  }

  return (
    <>
      <h1>Weather App</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <ErrorBoundary>
        <WeatherCard loading={loading} weather={weather} forecast={forcast} fetchForecast={fetchForecast}/>
      </ErrorBoundary>
    </>
  )
}

export default App
