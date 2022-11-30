import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function icon() {
    let iconUrl = `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;
    return iconUrl;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="center">
      <div>{day()}</div>
      <img src={icon()} alt="icon" className="forecast-icon" />
      <div>{maxTemp()}</div>
      <div>{minTemp()}</div>
    </div>
  );
}
