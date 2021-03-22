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
  <div className="bg-gray-50 shadow rounded-xl py-4 px-8">
    <div className="flex items-center justify-between md:flex-col">
      <p className="font-semibold text-lg md:text-2xl text-yellow-700">{day}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={`Weather of ${alt}`}
      />
      <div>
        <span className="px-2 text-lg lg:text-2xl">
          {max}
          <span className="text-base align-text-top">°C</span>
        </span>
        <span className="text-gray-500 px-2 text-lg lg:text-2xl">
          {min}
          <span className="text-base align-text-top">°C</span>
        </span>
      </div>
    </div>
    <div className="py-6 flex flex-col items-center text-center hidden md:block">
      <div className="mb-4">
        <p className="font-semibold text-yellow-500">Wind</p>
        <p className="text-xl">
          {wind} <span className="text-base">M/S</span>
        </p>
      </div>
      <div className="mb-4">
        <p className="font-semibold text-yellow-500">Visibility</p>
        <p className="text-xl">
          {visibility} <span className="text-base">M</span>
        </p>
      </div>
      <div className="mb-4">
        <p className="font-semibold text-yellow-500">Humidity</p>
        <p className="text-xl">
          {humidity} <span className="text-base">%</span>
        </p>
      </div>
    </div>
  </div>
);

export default DayDetail;
