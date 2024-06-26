import React, { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

import "./Weather.css";

export default function Weather({ weatherData }) {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [iconUrl, setIconUrl] = useState("");

  function displayTemp() {
    if (weatherData) {
      setTemperature(Math.round(weatherData.main.temp));
      setDescription(weatherData.weather[0].description);
      setHumidity(weatherData.main.humidity);
      setWind(weatherData.wind.speed);
      setIconUrl(
        `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
      );
    }
  }

  React.useEffect(() => {
    displayTemp();
  });

  if (!weatherData)
    return (
      <InfinitySpin
        visible={true}
        width="200"
        color="#0D6EFD"
        ariaLabel="infinity-spin-loading"
      />
    );

  return (
    <div>
      <h3>
        Temperature: <strong>{temperature}°C</strong>
      </h3>
      <h3>
        Description: <strong>{description}</strong>{" "}
      </h3>
      <h3>
        Humidity: <strong>{humidity}%</strong>
      </h3>
      <h3>
        Wind: <strong>{wind} km/h</strong>
      </h3>
      {iconUrl && <img src={iconUrl} alt="Weather Icon" />}
    </div>
  );
}
