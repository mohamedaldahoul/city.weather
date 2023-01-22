
type Props = {
  getWeatherInfo: (city: string) => void;
  city: string;
  handleChange: (eValue: string)=> void;

}

const WeatherForm = ({getWeatherInfo, city, handleChange}: Props) => {
  // const [city, setCity] = useState('')

  return (
    <>
      <input value={city} onChange={(e)=> {
        console.log('e', e.target.value);
        const eValue = e.target.value;
        handleChange(eValue)}} />
      <button onClick={()=> getWeatherInfo(city)}>Get weather</button>
    </>
  )
}

export default WeatherForm;