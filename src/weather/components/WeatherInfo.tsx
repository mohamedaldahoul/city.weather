
type Props = {
  temperature: number;
  humidity: number;
  icon: string; 
}


const WeatherInfo = ({temperature, humidity,icon}: Props) => {
  return( 
    <div> 
      <p>Weather Info:</p>
    
      <p>{`Temperature: ${temperature}`}</p>
      <p>{`Humidity: ${humidity}`}</p>
      <img 
        src={icon}
        alt="icon" />

    </div>)
}

export default WeatherInfo