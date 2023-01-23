import { useState, FC } from "react"
import { getWeather, getIcon } from "../resources";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
// import makeStyles from '@mui/styles/makeStyles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// const useStyles = makeStyles(({theme})=> ({
//   btn: {
//     [theme.breakpoints.up('sm')]: {
//       backgroundColor: '#007500',
//       color: '#1a237e'

//     },
//   },
// }));
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
type Props ={ 
}

const WeatherContainer: FC<Props> = () => {
  const [city, setCity] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  
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
    setIsFetching(true); 
    console.log(city, isFetching);
    
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
      setIsFetching(false)
    }).finally(()=> setIsFetching(false));
  }
  
  const handleChange = (value: string) => {
    setCity(value)
    setWeather(initialWeatherState)
    setError(initialErrorState) 
  }
  const isDisabled = city === '' || isFetching;
console.log(isDisabled, isFetching);

  return (
    <>
      <WeatherForm
        isDisabled={isDisabled}
        isError={!isVisible && isError}
        error={error} 
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
    </>
  )
}

export default WeatherContainer