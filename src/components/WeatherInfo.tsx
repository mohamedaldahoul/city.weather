import { useEffect, useState } from "react"
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

interface WeatherState {
  temperature: number| undefined;
  humidity: number|undefined;
  icon: string;
}
interface ErrorState {
  code: number| undefined;
  message: string;
}

const WeatherInfo = () => {
const [city, setCity] = useState('')
  const initialWeatherState: WeatherState = {
    temperature: undefined,
    humidity: undefined,
    icon: '',
  };
  const [weather, setWeather] = useState<WeatherState>(initialWeatherState);  

  const getWeather = () => {
    console.log('get', city);
    
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(({data}) => {
      console.log('res', data)
      setWeather({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      })
    }
    )
  }
  console.log('weather', weather);
  
  return( 
    <div> 
      <p>Weather Info:</p>
      <input value={city} onChange={(e)=> {
        console.log('e', e.target.value);
        
        setCity(e.target.value)}} />
      <button onClick={()=> getWeather()}>Get weather</button>
      <p>{`Temperature: ${weather?.temperature}`}</p>
      <p>{`Humidity: ${weather?.humidity}`}</p>
      <img 
        src={weather.icon}
        alt="icon" />

    </div>)
}

export default WeatherInfo