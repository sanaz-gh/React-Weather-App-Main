import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";
import { FaSearch } from "react-icons/fa";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [requestError, setRequestError] = useState("");

  function handleResponse(response) {
    
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    const input = {};
    if (!input.placeholder) {
      delete setRequestError();
  }
    }
     
  function search() {
    const apiKey = "8cac06f7ab6c10287cd06a316ff84a57";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl)
    .then(handleResponse)
    .catch((error) => {
    console.log(error.response.data.message);
    setRequestError(error.response.data.message);
    })
    ;
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type= "search"
                placeholder= " Enter a city..."
                className= "form-control search-input"
                autoFocus= "on"
                onChange= {handleCityChange}
                
              />
              <FaSearch className="icon-search" /> 
              {requestError && <h3>{requestError}</h3>}
              
            </div>
           
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                
              />
             
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
   
    return (
      <div>
      
        <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#fff" 
          ariaLabel="three-dots-loading"
         wrapperStyle={{}}
         wrapperClassName=""
         visible={true}
       />
      </div>
    );
   
  }
}