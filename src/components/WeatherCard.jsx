import React from 'react';

export default function WeatherCard(props) {
  const {
    location,
    temperature,
    weatherIcon,
    weatherCondition,
    forecastText,
    dateTime,
  } = props;

  const imageUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div id="weather-card" className="weather-card card">
      <div id="weather-card-header" className="weather-card-header card-header">
        <p className="weather-location card-text">{location}</p>
      </div>
      <div id="weather-card-body" className="weather-card-body card-body">
        <div id="weather-card-info" className="weather-card-info">
          <h5
            id="weather-temperature"
            className="weather-temperature card-title"
          >
            {`${temperature}°C`}
          </h5>
          <p id="weather-condition" className="weather-condition card-text">
            {weatherCondition}
          </p>
          <p id="weather-forecast" className="weather-forecast card-text">
            {forecastText}
          </p>
        </div>
        <div id="weather-card-icon" className="weather-card-icon">
          <img src={imageUrl} alt="weather-icon" />
        </div>
      </div>
      <div id="weather-card-footer" className="weather-card-footer card-footer">
        <p id="weather-date-time" className="weather-date-time card-text">
          {dateTime}
        </p>
      </div>
    </div>
  );
}
