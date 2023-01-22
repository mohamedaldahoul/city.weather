import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

type ErrorType = {
  code?: string;
  message: string;
} 
type Props = {
  getWeatherInfo: (city: string) => void;
  city: string;
  handleChange: (eValue: string)=> void;
  isError: boolean;
  error: ErrorType;
}

const WeatherForm = ({getWeatherInfo, city, handleChange, isError, error}: Props) => {
  // const [city, setCity] = useState('')
  const { code, message } = error;
  return (
    <Box 
    component="form"
    style={{justifyContent: 'flex'}}
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    >
      <TextField 
        error={isError}
        value={city} 
        variant="outlined"
        label="City"
        fullWidth
        style={{color: '#1a237e'}}
        onChange={(e)=> {
        console.log('e', e.target.value);
        const eValue = e.target.value;
        handleChange(eValue)}}
        helperText={isError && `Error ${code} : ${message}`}
      />
      <Button 
       variant="contained"
       style={{margin:5,backgroundColor: '#1a237e'
      }}
      onClick={()=> getWeatherInfo(city)}>Get weather</Button>
    </Box>
  )
}

export default WeatherForm;