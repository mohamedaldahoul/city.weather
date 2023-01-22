
type Props = {
  temperature: number;
  humidity: number;
  icon: string; 
  name: string
}


const WeatherInfo = ({temperature, humidity, icon, name}: Props) => {
  return( 
    <div> 
      <p>Weather Status in {name}</p>
      <p>{`Temperature: ${temperature}`}</p>
      <p>{`Humidity: ${humidity}`}</p>
      <img 
        src={icon}
        alt="icon" />

    </div>)
}

export default WeatherInfo