import axios from "axios";
const API_KEY = process.env.REACT_APP_WEATHER_KEY;

export const getWeather = (city:String) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(({data}) => data);

export const getIcon = (cod: String) => {
  const icon =`http://openweathermap.org/img/w/${cod}.png`
  return icon;
}



