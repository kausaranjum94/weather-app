import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import ForeCastList from './ForecastList';

const WeatherCard = ({ loading, weather, forecast, fetchForecast }) => {
  if (loading) {
    return (
      <Card sx={{ maxWidth: 345, margin: 'auto', mt: 4, textAlign: 'center' }}>
        <CardContent>
          <CircularProgress />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Weather Data Loading...
          </Typography>
        </CardContent>
      </Card>
    );
  }

  if (!weather) return null;

  return (
    <Card sx={{ maxWidth: "100%", margin: 'auto', mt: 4, p: 2, borderRadius: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {weather.name}, {weather.sys.country}
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ color: '#1976d2', fontWeight: 600, mb: 1 }}>
          {new Date(weather.dt * 1000).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
        </Typography>
        <Grid >
          <Typography variant="body1" sx={{ color: '#0089ff', fontSize: '2.5rem', fontWeight: 'bold' }}>
            {weather.main.temp}°C
          </Typography>
          <Typography variant="body1">
            {weather.weather[0].description}
          </Typography>
        </Grid>
        <Grid container spacing={2} sx={{justifyContent: "center", gap: "30px", mt: 4}}>
          <Grid >
            <Typography variant="body2" color="text.secondary" sx={{fontWeight: "700"}}> 
              Feels Like
            </Typography>
            <Typography variant="body1">
              {weather.main.feels_like}°C
            </Typography>
          </Grid>
          <Grid >
            <Typography variant="body2" color="text.secondary" sx={{fontWeight: "700"}}>
              Min / Max
            </Typography>
            <Typography variant="body1">
              {weather.main.temp_min}°C / {weather.main.temp_max}°C
            </Typography>
          </Grid>
          <Grid >
            <Typography variant="body2" color="text.secondary" sx={{fontWeight: "700"}}>
              Humidity
            </Typography>
            <Typography variant="body1">
              {weather.main.humidity}%
            </Typography>
          </Grid>
          <Grid >
            <Typography variant="body2" color="text.secondary" sx={{fontWeight: "700"}}>
              Wind Speed
            </Typography>
            <Typography variant="body1">
              {weather.wind.speed} m/s
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <ForeCastList forecast={forecast} fetchForecast={fetchForecast} />
    </Card>
  );
};

export default WeatherCard;