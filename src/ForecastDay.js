import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.daily[0].temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.daily[0].temperature.minimum);
    return `${temperature}°`;
  }

  function icon() {
    let iconUrl = `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.daily[0].condition.icon}.png`;
    return iconUrl;
  }

  function day() {
    let date = new Date(props.data.daily[0].time * 1000);
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
