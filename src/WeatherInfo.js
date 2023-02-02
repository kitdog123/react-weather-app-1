import React from "react";
import clouds from "./clouds.gif";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.name}</h1>
          <img src={clouds} alt="clouds" />
        </div>
        <div className="col-6">
          <h2>
            <span>{props.temperature}</span>°
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
            <FormattedDate date={props.date} />
          </h3>
          <ul>
            <li className="weather-Description"> {props.description} </li>
            <li className="temperature">
              High <span>high temp</span>° | Low
              <span>low temp</span>°
            </li>
            <li className="humidity">
              Humidity: <span>{props.humidity}</span>%
            </li>
            <li className="wind">
              Wind: <span>{props.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
