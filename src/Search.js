import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(null);
  const [data, setData] = useState(null);

  function showTempData(response) {
    setData(response.data);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeatherData(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=894a2e7aa7f46eeca5d8778f6faa5a5b&units=metric`;
    axios.get(apiUrl).then(showTempData);
  }
  console.log(data);
  return (
    <div className="Search">
      <h1>Weather Search Engine</h1>
      <form onSubmit={getWeatherData}>
        <input
          type="search"
          placeholder="Enter a City"
          autoFocus
          onChange={updateCity}
        />
        <input type="submit" value="search" />
      </form>
      <br />
      <Weather weatherData={data} />
    </div>
  );
}
