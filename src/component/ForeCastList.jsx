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

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Only take the first 5 unique days, excluding today
  const days = Object.values(dayMap)
    .filter(day => day.dt_txt.split(' ')[0] !== today)
    .slice(0, 5);

  return (
    <div className="forecast" >
      <Typography variant="h6" sx={{ mt: 3, mb: 2, fontSize: "20px", color: "", fontWeight: "700" }}>5-Day Forecast</Typography>
      <Grid container spacing={2} sx={{justifyContent: "center", p:4}} >
        {days.map((day, index) => (
          <Grid key={index}>
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
              <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: "16px", color: "#0089ff" }}>
                {day.main.temp_min}°C / {day.main.temp_max}°C
              </Typography>
              <Typography variant="body2">Humidity: {day.main.humidity}%</Typography>
              <Typography variant="body2">Wind: {day.wind.speed} m/s</Typography>
              <Typography variant="body2">Clouds: {day.clouds.all}%</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ForeCastList;