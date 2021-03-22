import DayDetail from './DayDetail';

const Weather = ({ weather, city }) => {
  console.log(weather);
  return (
    <div>
      <div className="my-2 lg:mb-8 lg:mt-4">
        <h4 className="font-semibold text-yellow-700 text-lg lg:text-2xl mb-2">
          Wealther Forcast in the next 5 days
        </h4>
        <h2 className="font-bold text-4xl lg:text-5xl">{city}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {weather.map((day, index) => {
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
    </div>
  );
};

export default Weather;
