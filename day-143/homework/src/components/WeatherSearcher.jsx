import React, { useEffect, useState } from 'react'

const WeatherSearcher = () => {

  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const fetchData = async () => {

      if (inputValue) {
        try {

          const APIKey = '6365f55b9623b8760b65d3408ada0993';
    
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIKey}&units=metric`);
          const data = await response.json();

          if (response.ok) {
            console.log(data);
            setWeatherData(data);
          } else {
            setWeatherData(null);
          }

      } catch(error) {
        console.error(`Something went wrong: ${error}`)
      }
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const location = e.target.elements.locationName.value;
    setInputValue(location);
  }

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  const switchToF = () => {
    if (isCelsius) {
      Math.round(weatherData.main.temp = (9 / 5 * weatherData.main.temp) + 32);
      setIsCelsius(false);
    }
  }

  const switchToC = () => {
    if (!isCelsius) {
      Math.round(weatherData.main.temp = (weatherData.main.temp - 32) * 5 / 9);
      setIsCelsius(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name = 'locationName' placeholder='Enter Location' required />
        <button type='submit'>Submit</button>
      </form>

    {weatherData ? (
      <div>
        <h1>{weatherData.name}</h1>
        <h2>{weatherData.weather[0].main}</h2>
        <p>Description: {weatherData.weather[0].description} </p>
        <p>Temperature: {weatherData.main.temp} {isCelsius ? "°C" : "°F"} <button onClick={switchToF}>Farhenheit</button> <button onClick={switchToC}>Celsius</button></p>
        <p>Humidity: {weatherData.main.humidity}%</p>
      </div>
    ) : (
      <div></div>
    )}
      
    </div>
    
  )
}

export default WeatherSearcher