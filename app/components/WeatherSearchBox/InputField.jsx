import React, { useEffect, useState } from "react";
import axios from "axios";
import Popover from "./Popover";
import Loading from "../../assets/Loading.png";
import Image from "next/image";

const InputField = () => {
  const API_KEY = "bef59557a3104e82baf204148242503";
  const [weatherData, setWeatherData] = useState(null);
  const [clickedCity, setClickedCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(null);

  const getWeatherForCity = async (city) => {
    try {
      setCityName(city);
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
      );
      setWeatherData(response.data);
    } catch (error) {
      setWeatherData(false);
    }
  };

 

  return (
    <div className="flex flex-col transition-all">
      <div className="relative">
        <input
          type="text"
          className="rounded-lg bg-opacity-60  h-14 bg-input text-base-100 relative pl-6 pr-12 w-full placeholder:text-base-400 outline-none "
          placeholder={clickedCity ? clickedCity : "Search location"}
          onChange={(e) => getWeatherForCity(e.target.value)}
          value={clickedCity ? clickedCity : cityName}
        />
        {loading === false ? (
          <span className="absolute right-1  top-0 bottom-0 flex items-center">
            <Image src={Loading} alt="" srcSet="" className="animate-spin " />
          </span>
        ) : (
          ""
        )}
      </div>

      {weatherData ? (
       
          <Popover
            setClickedCity={setClickedCity}
            clickedCity={clickedCity}
            setLoading={setLoading}
            city={weatherData?.location?.name}
            cityFilter={cityName}
          />
      
      ) : (
        ""
      )}
    </div>
  );
};

export default InputField;
