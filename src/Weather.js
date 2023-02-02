import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff1d9ea9376b5c27a82e04fc2b2abdbb&units=metric`;
    axios.get(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={updateCity}
        placeholder="Enter your city"
        autofocus="on"
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              {searchForm}
              <WeatherInfo data={weather} />

              <div className="forecast" id="forecast"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <WeatherInfo />;
    search();
  }
}
