import { useState, useEffect } from 'react';
import Weather from './components/weather/Weather';
import Search from './components/Search';

const Loading = () => <div>Loading...</div>;

function App() {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState(null);
  const [notFoundMsg, setNotFoundMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
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
        const fiveDaysData = data.list.filter((ele, index) => index % 8 === 0);
        setWeather(fiveDaysData);
        setCity(data.city.name);
        setNotFoundMsg(null);
      } else if (data.cod === '404') {
        setNotFoundMsg(data.message);
        setWeather(null);
      }
      setErrMsg(null);
      setQuery('');
    } catch (e) {
      setErrMsg(e.message);
      setNotFoundMsg(null);
      setWeather(null);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <main className="px-4 py-6 max-w-7xl mx-auto">
      <Search
        query={query}
        handleChange={handleChange}
        handleSearch={getWeatherData}
      />
      {!weather && !notFoundMsg && !errMsg && <Loading />}
      {errMsg && <div className="text-red-700">{errMsg}</div>}
      {notFoundMsg && (
        <div className="w-2/3 bg-yellow-700 text-white p-4 rounded shadow">
          Sorry, {notFoundMsg}. Try another city name.
        </div>
      )}
      {weather && <Weather weather={weather} city={city} />}
    </main>
  );
}

export default App;
