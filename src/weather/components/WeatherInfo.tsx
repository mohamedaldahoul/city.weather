import Typography from '@mui/material/Typography'
type Props = {
  temperature: number;
  humidity: number;
  icon: string; 
  name: string
}


const WeatherInfo = ({temperature, humidity, icon, name}: Props) => {
  return( 
    <div> 
      <Typography>Weather Status in {name}</Typography>
      <Typography>{`Temperature: ${temperature}`}</Typography>
      <Typography>{`Humidity: ${humidity}`}</Typography>
      <img 
        src={icon}
        alt="icon" />

    </div>)
}

export default WeatherInfo