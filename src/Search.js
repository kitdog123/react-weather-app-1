import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(false);
  let [temperature, setTemperature] = useState(null);

  function showWeather(response) {
    setWeather(true);
    setTemperature(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff1d9ea9376b5c27a82e04fc2b2abdbb&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a city..." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (weather) {
    return (
      <div>
        {form}
        {Math.round(temperature)}
      </div>
    );
  } else {
    return form;
  }
}
