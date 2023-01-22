import { useState } from "react";

type Props = {
  getWeatherInfo: (city: string) => void 
}

const WeatherForm = ({getWeatherInfo}: Props) => {
  const [city, setCity] = useState('')


  return (
    <>
      <input value={city} onChange={(e)=> {
        console.log('e', e.target.value);
        
        setCity(e.target.value)}} />
      <button onClick={()=> getWeatherInfo(city)}>Get weather</button>
    </>
  )
}

export default WeatherForm;