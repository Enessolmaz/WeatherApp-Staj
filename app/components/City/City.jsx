"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { icons } from "./icons/icons";
import Image from "next/image";
import Loading from "../../assets/Loading.png";

const City = ({ city }) => {
  const API_KEY = "bef59557a3104e82baf204148242503";
  const [loading, setLoading] = useState(false);

  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    setLoading(true)
    const getCityInApi = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
        );

        setCityData(response.data);
        setLoading(false)
      } catch (error) {}
    };
    getCityInApi();
  }, [city]);

  icons[0].value = cityData?.current?.temp_c;
  icons[1].value =
    cityData?.forecast?.forecastday[0]?.day?.daily_chance_of_rain + "%";
  icons[2].value = cityData?.current?.wind_kph + " km/h";
  icons[3].value = cityData?.forecast?.forecastday[0]?.day?.avghumidity + "%";
  icons[4].value = cityData?.current?.uv;

  return (
    <div className="w-full flex justify-center items-center mt-24">
      {loading ? (
        <Image src={Loading} alt="" width={125}  srcSet="" className="animate-spin z-50" />
      ) : (
        <WeatherCard cityData={cityData} />
      )}
    </div>
  );
};

export default City;
