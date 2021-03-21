const Weather = ({ weather, notFoundMsg }) => {
  if(notFoundMsg) return <div>{notFoundMsg}</div>
  console.log(weather);
  return (
    <div>
      <h3>Wealther Forcast</h3>
      {weather && (
        weather.map((day,index) => (
          <div key={index}>
            <p>{day.dt_txt}</p>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={`Weather of ${day.weather[0].main}`}/>
            <p>{day.main.temp_max}</p>
            <p>{day.main.temp_min}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Weather;