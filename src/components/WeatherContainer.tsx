import { useState } from "react"
import { getWeather, getIcon } from "../resources";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";


interface WeatherState {
  temperature?: number | any;
  humidity?: number| any;
  icon: string;
}
interface ErrorState {
  code: number| undefined;
  message: string;
}

const WeatherContainer = () => {
  const initialWeatherState: WeatherState = {
    temperature: undefined,
    humidity: undefined,
    icon: '',
  };
  const [weather, setWeather] = useState<WeatherState>(initialWeatherState);  
  
  const initialErrorState: ErrorState = {
    code: undefined,
    message: '',
  };
  const [error, setError] = useState<ErrorState>(initialErrorState);
  const getWeatherInfo = (city: string) => {
    console.log('get', city);
    
    getWeather(city).then((data)=>{ 
      console.log('data', data)
      setWeather({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        icon: getIcon(data.weather[0].icon),
      })
    });
  }
  const {temperature, humidity, icon} = weather;
  console.log('weather', weather, error);
  return (
    <>
    <WeatherForm getWeatherInfo={getWeatherInfo}/>
    <WeatherInfo 
      temperature={temperature}
      humidity={humidity}
      icon={icon}
    />
    </>
  )
}

export default WeatherContainer