import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "India",
    temp: 24,
    mintemp: 45,
    maxtemp: 14,
    humidity: 47,
    weather: "Haze",
  });

  let updateInfo=(newInformation)=>{
     setWeatherInfo(newInformation);
  }
  return (
    <>
      <div>
        <h2 className="text-center font-bold text-4xl">Weather App By Anuj</h2>
      </div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
