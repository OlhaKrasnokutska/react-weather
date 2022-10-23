import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7497a8195f7315d98b24229058ab6f42";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        class="searchLine"
        placeholder="Please, type a city"
        onChange={updateCity}
      />
      <input type="submit" class="searchButton" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="container">
        {form}
        <p className="currentPlace">
          Current temperature in {weather.city.toUpperCase()} is:
          <WeatherTemperature celsius={weather.temperature} />
          <br />
          <FormattedDate date={weather.date} />
        </p>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <img src={weather.icon} alt={weather.description} />
          </div>

          <div className="col-md-6 col-sm-12 left-align">
            <ul>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {weather.wind} km/h</li>
              <li>{weather.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
