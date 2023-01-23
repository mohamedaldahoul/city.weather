import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import makeStyles from '@mui/styles/makeStyles';

// const useStyles = makeStyles(() => ({
//   textField: {
//     sx: {
//         backgroundColor: { xs:"#007500" , sm: "#007500", md: "#1a237e"},
//         width:{ xs:"100%" , sm: "100%", md: "75%", lg: "75%"} 
//       }},
//   btn: {
//     margin:1000,
//     backgroundColor: '#1a237e',
//   } 
//   }
// ));

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
  isDisabled: boolean;
}

const WeatherForm = ({getWeatherInfo, city, handleChange, isError, error, isDisabled }:Props ) => {
  const { code, message } = error;
  // const classes = useStyles();
  return (
    <Box 
    component="form"
    style={{justifyContent: 'flex'}}
    sx={{
      // '& > :not(style)': { m: 1, width: '25ch' },
    }}
    >
      <TextField 
        error={isError}
        value={city} 
        sx={{ 
          backgroundColor: { xs:"#a6bbec" , sm: "#a6bbec", md: "#d7e1f9"},
          width:{ xs:"97%" , sm: "97%", md: 331, lg: 300}, 
          marginTop: { xs: 1.5 , sm: 2, },
          marginBottom: { xs:1 , sm: 1, },
          marginRight: { md: 4}  
        }}
        variant="outlined"
        label="City"
        onChange={(e)=> {
          const eValue = e.target.value;
          handleChange(eValue)
        }}
        helperText={isError && `Error ${code} : ${message}`}
      />
      <Button 
        disabled={isDisabled}
        variant="contained"
        sx={{ 
          backgroundColor:  '#1a237e',
          width:{ xs:"97%" , sm: "100%", md: "50%", lg: "50%"},
          marginTop: { xs: 1.5 , sm: 2, },
          marginBottom: { xs:2 , sm: 2, },
          marginRight: { md: 4}, 
        }}
        onClick={()=> getWeatherInfo(city)}>Get weather</Button>
    </Box>
  )
}

export default WeatherForm;