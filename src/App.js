import { useState, useEffect } from 'react';
import Weather from './components/weather/Weather';


function App() {
  const [city, setCity] = useState('Vancouver');
  const [notFoundMsg, setNotFoundMsg] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() =>{
    (async function fetchintialData() {
      await getWeatherData();
    })();
  }, []);

  const getWeatherData = async() => {
    try {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}&units=metric`);
      const data = await result.json();

      if (data.cod === '200') {
        console.log(data);
        const filtered = data.list.filter((ele, index) => index%8 === 0);
        setWeather(filtered);

      } else if (data.cod === '404') {
        setNotFoundMsg(data.message);
      }
      
    } catch(e) {
      console.error(e);
    }
  }
  return (
    <div className="App">
      <main>
        <Weather weather={weather} notFoundMsg={notFoundMsg}/>
      </main>
    </div>
  );
}

export default App;
