import { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import logo from './logo.png';
import './App.css';
import Weather from './weather';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Box 
      component="div"
      sx={{
        paddingTop: { xs:0.80 , sm: 0.80, md: 2, lg: 4}, 
        paddingLeft: { xs:0.80 , sm: 0.80, md: 2, lg: 0},
      }}
      >
      <Card 
        sx={{ 
          height: { xs:35 , sm: 70, md: 70, lg: 70} , 
          width:{ xs:165 , sm: 331, md: 331, lg: 300}, 
          marginRight : { xs:0 , sm: 0, md: 6, lg: 4}  
          }}>
        <CardMedia 
          sx={{ 
            height: { xs:30 , sm:  65, md: 65, lg: 65} , 
            width:{ xs:160 , sm: 327, md: 327, lg: 295}
          }}
          image={logo}
          title="Anticimex"
        />
      </Card>
      </Box>
        <Weather
        />
      </header>
    </div>
  );
}

export default App;
