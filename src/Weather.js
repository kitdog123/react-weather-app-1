import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import clouds from "./clouds.gif";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org./img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff1d9ea9376b5c27a82e04fc2b2abdbb&units=metric`;
    axios.get(url).then(showWeather);
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

  if (loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              {searchForm}
              <div className="row">
                <div className="col-6">
                  <h1>{city}</h1>
                  <img src={clouds} alt="clouds" />
                </div>
                <div className="col-6">
                  <h2>
                    <span>{weather.temperature}</span>°
                    <span className="units">
                      <a href="#" id="celsius">
                        C
                      </a>{" "}
                      |
                      <a href="#" id="fahrenheit">
                        F
                      </a>
                    </span>
                  </h2>
                  <h3>
                    <FormattedDate date={weather.date} />
                  </h3>
                  <ul>
                    <li className="weather-Description">
                      {" "}
                      {weather.description}{" "}
                    </li>
                    <li className="temperature">
                      High <span>high temp</span>° | Low
                      <span>low temp</span>°
                    </li>
                    <li className="humidity">
                      Humidity: <span>{weather.humidity}</span>%
                    </li>
                    <li className="wind">
                      Wind: <span>{weather.wind}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
              <div className="forecast" id="forecast"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return searchForm;
  }
}
