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

  function day() {
    let date = new Date(props.data.daily[0].time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div>{day()}</div>
      <div>😥</div>
      <div>{maxTemp()}</div>
      <div>{minTemp()}</div>
    </div>
  );
}
