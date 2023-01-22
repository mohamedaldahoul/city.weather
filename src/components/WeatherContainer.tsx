import { useState } from "react"
import { getWeather, getIcon } from "../resources";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
import Error from "./Error"


interface WeatherState {
  temperature?: number | any;
  humidity?: number| any;
  icon: string;
}
interface ErrorState {
  code?: number| any;
  message: string;
}

const WeatherContainer = () => {
  const initialWeatherState: WeatherState = {
    temperature: undefined,
    humidity: undefined,
    icon: '',
  };
  const [weather, setWeather] = useState<WeatherState>(initialWeatherState);  
  const {temperature, humidity, icon} = weather;
  
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
      console.log('data', data)
      setWeather({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        icon: getIcon(data.weather[0].icon),
      })
      setError(initialErrorState)
    }).catch(({response})=>{
      console.log('err', response)
      const { cod, message} = response.data;
        setError({
          code: cod,
          message: message
        });
        
    }) ;
  }
  console.log('weather', weather, error);
  
  return (
    <>
    <WeatherForm getWeatherInfo={getWeatherInfo}/>
    { !isError && isVisible && <WeatherInfo 
      temperature={temperature}
      humidity={humidity}
      icon={icon}
    />}
    {
      !isVisible && isError && 
        <Error 
          code={code}
          message={message}
        />
    }
    </>
  )
}

export default WeatherContainer