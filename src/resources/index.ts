import axios from "axios";
const API_KEY = process.env.REACT_APP_WEATHER_KEY;

export const getWeather = (city:String) => {
  console.log('city', city);
  
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(({data}) => {
      console.log('res', data)
      return data
    }
    ) 
}

export const getIcon = (cod: String) => {
  const icon =`http://openweathermap.org/img/w/${cod}.png`
  return icon;
}



