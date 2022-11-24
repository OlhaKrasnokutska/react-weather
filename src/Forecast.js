import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);

    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col-1 card">
          <ForecastDay data={forecast} />
        </div>
      </div>
    );
  } else {
    let apiKey = "28ae48tbf6e9169de4of202670faef34";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
