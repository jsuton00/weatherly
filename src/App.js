import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    lat: '',
    lon: '',
    location: '',
    temperature: '',
    weatherIcon: '',
    weatherCondition: '',
    forecastText: '',
    errorMessage: '',
    dateTime: '',
  };

  getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getWeatherData = async (latitude, longitude) => {
    const response = await axios.get(
      `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.data;

    console.log('data is:', data);

    this.setState({
      lat: data.coord.lat,
      lon: data.coord.lon,
      location: data.name,
      temperature: Math.round(data.main.temp),
      weatherIcon: data.weather[0].icon,
      weatherCondition: data.weather[0].main,
      forecastText: data.weather[0].description,
      dateTime: moment.unix(data.dt).format('Do MMM YYYY, hh:mm a'),
    });
  };

  componentDidMount() {
    this.getPosition()
      .then((position) => {
        this.getWeatherData(
          position.coords.latitude,
          position.coords.longitude,
        );
      })
      .catch((err) => console.log(err.message));

    this.timerID = setInterval(() => {
      this.getWeatherData(this.state.lat, this.state.lon);
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div id="app" className="app">
        <Header />
        <main id="main" className="main container-fluid">
          <div id="main-title" className="main-title row">
            <h3>What Is the Weather Like in Your Place Today?</h3>
          </div>
          <div id="weather-container" className="weather-container row">
            <WeatherCard
              location={this.state.location}
              temperature={this.state.temperature}
              weatherIcon={this.state.weatherIcon}
              weatherCondition={this.state.weatherCondition}
              forecastText={this.state.forecastText}
              dateTime={this.state.dateTime}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
