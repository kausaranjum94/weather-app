import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SearchBar = ({ city, setCity, fetchWeather, forecast, fetchForecast }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
            fetchWeather();
          fetchForecast();
        }}
        style={{ display: 'flex', gap: 8 }}
      >
        <TextField
          label="Type City Name"
          variant="outlined"
          value={city || ''}
          onChange={(e) => setCity(e.target.value)}
          size="small"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </Box>
  );
};

export default SearchBar;