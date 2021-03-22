import { useState, useEffect } from 'react';
import Weather from './components/weather/Weather';
import Search from './components/Search';

const Loading = () => <div>Loading...</div>;

function App() {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState(null);
  const [notFoundMsg, setNotFoundMsg] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async function fetchintialData() {
      await getWeatherData();
    })();
  }, []);

  const getWeatherData = async () => {
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          query === '' ? 'Vancouver' : query
        }&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}&units=metric`,
      );
      const data = await result.json();

      if (data.cod === '200') {
        const filtered = data.list.filter((ele, index) => index % 8 === 0);
        setWeather(filtered);
        setCity(data.city.name);
        setQuery('');
      } else if (data.cod === '404') {
        setNotFoundMsg(data.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <main>
        <Search
          query={query}
          handleChange={handleChange}
          handleSearch={getWeatherData}
        />
        {!weather && !notFoundMsg && <Loading />}
        {notFoundMsg && <div>{notFoundMsg}</div>}
        {weather && <Weather weather={weather} city={city} />}
      </main>
    </div>
  );
}

export default App;
