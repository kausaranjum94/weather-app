# Weather App

A modern weather app built with **Vite + React** and **Material UI**.  
Get current weather and 5-day forecast for any city using the OpenWeatherMap API.

---

## Features

- Search weather by city name
- Current weather details (temperature, humidity, wind, etc.)
- 5-day forecast in a responsive grid
- Material UI design
- Error handling for invalid cities or network issues

---

## Demo

[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/)

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/kausaranjum94/weather-app.git
cd weather-app
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

> **Never commit your `.env` file to GitHub!**

### 4. Run the app locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## Deployment

### Deploy to Netlify

1. Push your code to GitHub.
2. Go to [Netlify](https://app.netlify.com/) and create a new site from GitHub.
3. Set the **build command** to `npm run build` and the **publish directory** to `dist`.
4. In **Site settings > Build & deploy > Environment**, add your API key as:
   - Key: `VITE_WEATHER_API_KEY`
   - Value: `your_openweathermap_api_key`
5. Deploy!

---

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## License

MIT

---

## Credits

Made
