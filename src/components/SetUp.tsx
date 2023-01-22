import { useEffect } from "react"
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

const SetUp = () => {  
  const city='London'
  useEffect(()=> {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(({data}) => console.log('res', data)
    )
  }, [])
  return( <div> 
      <p>Setup project fun</p>
    </div>)
}

export default SetUp