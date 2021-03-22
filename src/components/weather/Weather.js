import DayDetail from './DayDetail';

const Weather = ({ weather, notFoundMsg, city }) => {
  if (notFoundMsg) return <div>{notFoundMsg}</div>;
  console.log(weather);

  return (
    <div>
      <h2>{city}</h2>
      <h4>Wealther Forcast in the next 5 days</h4>
      {weather &&
        weather.map((day, index) => {
          const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ];
          const formatDay = days[new Date(day.dt_txt).getDay()];
          return (
            <DayDetail
              key={index}
              day={formatDay}
              icon={day.weather[0].icon}
              alt={day.weather[0].main}
              max={day.main.temp_max}
              min={day.main.temp_min}
              wind={day.wind.speed}
              visibility={day.visibility}
              humidity={day.main.humidity}
            />
          );
        })}
    </div>
  );
};

export default Weather;
