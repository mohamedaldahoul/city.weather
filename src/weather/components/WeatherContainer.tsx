import { useState } from "react"
import { getWeather, getIcon } from "../resources";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
import Error from "./Error"


interface WeatherState {
  temperature?: number | any;
  humidity?: number| any;
  icon: string;
  name: string
}
interface ErrorState {
  code?: number| any;
  message: string;
}

const WeatherContainer = () => {
  const [city, setCity] = useState('')
  const initialWeatherState: WeatherState = {
    temperature: undefined,
    humidity: undefined,
    icon: '',
    name: ''
  };
  const [weather, setWeather] = useState<WeatherState>(initialWeatherState);  
  const {temperature, humidity, icon, name} = weather;
  
  const initialErrorState: ErrorState = {
    code: undefined,
    message: '',
  };
  const [error, setError] = useState<ErrorState>(initialErrorState);
  const {code, message} = error;
  const isVisible = temperature && humidity
  const isError = code !== undefined && message !== '';
  const getWeatherInfo = (city: string) => {
    console.log('get', city);
    
    getWeather(city).then((data)=>{       
      setWeather({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        icon: getIcon(data.weather[0].icon),
        name: data.name,
      })
      setCity('')
    }).catch(({response: {data} })=>{
        const { cod, message} = data;
          setError({
            code: cod,
            message: message
          });
    }) ;
  }
  
  const handleChange = (value: string) => {
    setCity(value)
    setWeather(initialWeatherState)
    setError(initialErrorState) 
  }
  console.log('weather', weather, error);
  
  return (
    <>
      <WeatherForm 
        getWeatherInfo={getWeatherInfo}
        city={city}
        handleChange={handleChange}
        />
      { !isError && isVisible &&
        <WeatherInfo 
          temperature={temperature}
          humidity={humidity}
          icon={icon}
          name={name}
        />}
      { !isVisible && isError && 
        <Error 
          code={code}
          message={message}
        />
      }
    </>
  )
}

export default WeatherContainer