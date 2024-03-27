import Image from "next/image";
import React from "react";

import Clear from "./dayAssets/Clear.png";
import Clouds from "./dayAssets/Clouds.png";
import Cloudy from "./dayAssets/Cloudy.png";
import Rain from "./dayAssets/Rain.png";
import Storm from "./dayAssets/Storm.png";

import ClearNight from "./nightAssets/ClearNight.png";
import CloudsNight from "./nightAssets/CloudsNight.png";
import CloudyNight from "./nightAssets/CloudyNight.png";
import RainNight from "./nightAssets/RainNight.png";
import StormNight from "./nightAssets/StormNight.png";

import { nightDataIcons } from "./nightAssets/nightData";
import { dayDataIcons } from "./dayAssets/dayData";
import WeatherInfo from "./WeatherInfo";
import CityList from "./CityList";

const WeatherCard = ({ cityData }) => {
  const dayWeather = [
    {
      name: "Clear",
      img: Clear,
    },
    {
      name: "Clouds",
      img: Clouds,
    },
    {
      name: "Cloudy",
      img: Cloudy,
    },
    {
      name: "Rain",
      img: Rain,
    },
    {
      name: "Storm",
      img: Storm,
    },
    {
      name: "Partly rain",
      img: Rain,
    },
    {
      name: "Light rain",
      img: Rain,
    },
    {
      name: "Partly cloudy",
      img: Cloudy,
    },
    {
      name: "Mist",
      img: Cloudy,
    },
    {
      name: "Overcast",
      img: Cloudy,
    },
  ];

  const nightWeather = [
    {
      name: "Clear",
      img: ClearNight,
    },
    {
      name: "Clouds",
      img: CloudsNight,
    },
    {
      name: "Cloudy",
      img: CloudyNight,
    },
    {
      name: "Rain",
      img: RainNight,
    },
    {
      name: "Storm",
      img: StormNight,
    },
    {
      name: "Partly rain",
      img: RainNight,
    },
    {
      name: "Light rain",
      img: RainNight,
    },
    {
      name: "Partly cloudy",
      img: CloudyNight,
    },
    {
      name: "Mist",
      img: CloudyNight,
    },
    {
      name: "Overcast",
      img: CloudyNight,
    },
  ];

  const nightIcons = nightDataIcons;
  const dayIcons = dayDataIcons;

  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const days = [
      "Sunday,",
      "Monday,",
      "Tuesday,",
      "Wednesday,",
      "Thursday,",
      "Friday,",
      "Saturday,",
    ];
    const dayName = days[date.getDay()];
    return dayName;
  }

  const time = parseInt(
    cityData?.location?.localtime?.split(" ")[1].split(":")[0]
  );
  const result = time < 7 || time >= 17 ? "Night" : "Day";

  return (
    <div className="flex flex-col  ">
      <div className="dailyCard flex flex-col gap-2 relative rounded-lg w-[335px] h-[304px]  ">
        <Image
          width={335}
          height={304}
          src={
            result === "Night"
              ? nightWeather.find(
                  (item) => item?.name === cityData?.current?.condition?.text
                )?.img || nightWeather[0]?.img
              : dayWeather.find(
                  (item) => item?.name === cityData?.current?.condition?.text
                )?.img || dayWeather[0]?.img
          }
          alt={"result"}
          className="rounded-lg "
        />
        <div className="absolute cursor-pointer  pl-5 pt-5 top-0  h-full w-full">
          <div className="flex flex-col justify-between h-full  ">
            <span className="font-bold flex flex-col gap-[2px]">
              <span className="text-base-100">{cityData?.location?.name}</span>

              <span className="font-normal text-base-200">
                {getDayOfWeek(cityData?.forecast?.forecastday[0]?.date) +
                  " " +
                  cityData?.forecast?.forecastday[0]?.date}
              </span>
            </span>
            <div className="weatherDegree  flex justify-between items-center  gap-2 w-full">
              <div className="flex flex-col gap-2 ">
                <span className="text-5xl text-base-white font-extrabold ">
                  {Math.floor(cityData?.current?.temp_c) + "ºc"}
                </span>
                <span className=" flex flex-col">
                  <span className="text-lg font-bold">
                    {Math.floor(cityData?.forecast?.forecastday[0]?.day?.mintemp_c) +
                      "ºc" +
                      " / " +
                      Math.floor(cityData?.forecast?.forecastday[0]?.day?.maxtemp_c) +
                      "ºc"}
                  </span>
                  <span className="font-normal text-sm text-base-200">
                    {cityData?.current?.condition?.text}
                  </span>
                </span>
              </div>
              <div className="absolute right-0  ">
                <Image
                  width={160}
                  height={160}
                  src={
                    result === "Night"
                      ? nightDataIcons.find(
                          (item) =>
                            item?.name === cityData?.current?.condition?.text
                        )?.img || nightIcons[0]?.img
                      : dayIcons.find(
                          (item) =>
                            item?.name === cityData?.current?.condition?.text
                        )?.img || nightIcons[0]?.img
                  }
                  alt="result"
                />
              </div>
            </div>
          </div>
        </div>

        <WeatherInfo/>
       
        <CityList cityData={cityData} />
        
      </div>
    </div>
  );
};

export default WeatherCard;
