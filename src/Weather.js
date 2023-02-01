import React from "react";
import "./Weather.css";
import clouds from "./clouds.gif";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="city-form">
              <input
                type="text"
                name="city"
                id="city-input"
                placeholder="Enter your city"
                autofocus="on"
              />
              <input type="submit" value="Search" id="city-submit" />
            </form>
            <div className="row">
              <div className="col-6">
                <h1>Hello</h1>

                <img id="weather-gif" src={clouds} alt="clouds" />
              </div>
              <div className="col-6">
                <h2>
                  <span id="temperature"></span>°
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
                <h3 id="date"></h3>
                <ul>
                  <li
                    className="weather-Description"
                    id="weather-description"
                  ></li>
                  <li className="temperature">
                    High <span id="high-temp"></span>° | Low
                    <span id="low-temp"></span>°
                  </li>
                  <li className="humidity">
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li className="wind">
                    Wind: <span id="wind"></span> km/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="forecast" id="forecast"></div>
          </div>
          <footer>
            <a
              className="footer-link"
              href="https://github.com/kitdog123/SheCodes-Weather-Project"
            >
              Open Source Code
            </a>
            by Kitty <br />
            Hosted on
            <a className="footer-link" href="https://www.netlify.com/">
              Netlify
            </a>
            <br />
            Animated icons by
            <a
              className="footer-link"
              href="https://www.flaticon.com/free-animated-icons/weather"
            >
              Flat Icon
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
