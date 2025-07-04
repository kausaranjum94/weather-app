import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function ForeCastList({ forecast }) {
  if (!forecast || !forecast.list) return null;

  const dayMap = {};
  forecast.list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!dayMap[date]) {
      dayMap[date] = item;
    }
  });

  // Only take the first 5 unique days
  const days = Object.values(dayMap).slice(0, 5);

  return (
    <div className="forecast">
      <Typography variant="h6" sx={{ mt: 3, mb: 2, fontSize: "20px", color: "", fontWeight: "700" }}>5-Day Forecast</Typography>
      <Grid container spacing={2}>
        {days.map((day, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {new Date(day.dt_txt).toLocaleDateString(undefined, {
                  weekday: "long",
                  month: "short",
                  day: "numeric"
                })}
              </Typography>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                style={{ width: 60, height: 60 }}
              />
              <Typography variant="body2" sx={{ mb: 1 }}>
                {day.weather[0].description}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {day.main.temp_min}°C / {day.main.temp_max}°C
              </Typography>
              <Typography variant="body2">Humidity: {day.main.humidity}%</Typography>
              <Typography variant="body2">Wind: {day.wind.speed} m/s</Typography>
              <Typography variant="body2">Clouds: {day.clouds.all}%</Typography>
              <Typography variant="body2">Visibility: {day.visibility / 1000} km</Typography>
              <Typography variant="body2">Wind Dir: {day.wind.deg}°</Typography>
              {day.rain && day.rain['3h'] && (
                <Typography variant="body2">Rain (3h): {day.rain['3h']} mm</Typography>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ForeCastList;