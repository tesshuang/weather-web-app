const DayDetail = ({
  day,
  icon,
  alt,
  max,
  min,
  wind,
  visibility,
  humidity,
}) => (
  <div>
    <p>{day}</p>
    <img
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={`Weather of ${alt}`}
    />
    <p>{max}</p>
    <p>{min}</p>
    <div>
      <div>
        <p>Wind</p>
        <p>{wind}</p>
      </div>
      <div>
        <p>Visibility</p>
        <p>{visibility}</p>
      </div>
      <div>
        <p>Humidity</p>
        <p>{humidity}</p>
      </div>
    </div>
  </div>
);

export default DayDetail;
