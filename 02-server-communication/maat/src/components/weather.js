import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Temperature({description, tKelvin}) {
  return (
    <>
      <dt>{description}</dt>
      <dd>{(tKelvin - 273).toFixed(1)} °C</dd>
    </>
  )
}

function Wind({speed, directionDeg}) {
  function degToStr(deg) {
    const directionStrs = [
      'N', 'NNE', 'NE', 'ENE',
      'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW',
      'W', 'WNW', 'NW', 'NNW',
      'N'
    ]
    return directionStrs[Math.round((deg / (360/16)))]
  }
  return (
    <>
      <dt>Wind</dt>
      <dd>{speed} m/s {degToStr(directionDeg)}</dd>
    </>
  )
}

function Weather({city}) {
  const api_key = process.env.REACT_APP_API_KEY
  const [weatherData, setWeatherData] = useState(
    {
    "weather": [
      {
        "description": "unknown",
        "icon": "???"
      }
    ],
    "main": {
      "temp": 273,
      "feels_like": 273,
    },
    "wind": {
      "speed": 0,
      "deg": 0
    },
    }
  )
  const [weatherIconUrl, setWeatherIconUrl] = useState("//icons.veryicon.com/png/o/miscellaneous/alibaba-enterprise-intelligence-general-basic/weather-unknown-1.png")

  function updateWeatherData(data) {
    setWeatherData(data)
    setWeatherIconUrl(`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
  }

  useEffect(
    () => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
        .then(response => {updateWeatherData(response.data)})
    },
    []
  )

  return (
    <>
      <img src={weatherIconUrl} alt={weatherData.weather[0].description} width="50"/>
      <dl>
        <Temperature key="Temperature" description="Temperature" tKelvin={weatherData.main.temp} />
        <Temperature key="Feels like" description="Feels like" tKelvin={weatherData.main.feels_like} />
        <Wind key="wind" speed={weatherData.wind.speed} directionDeg={weatherData.wind.deg} />
      </dl>
    </>
  )
}

export default Weather;
