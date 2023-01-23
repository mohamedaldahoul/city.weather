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
      <Typography component='p'>Weather Status in <b><em>{name}</em></b> </Typography>
      <Typography component='p'>{`Temperature: ${temperature}`}</Typography>
      <Typography component='p'>{`Humidity: ${humidity}`}</Typography>
      <img 
        src={icon}
        alt="icon" />

    </div>)
}

export default WeatherInfo