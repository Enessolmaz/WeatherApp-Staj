import Image from "next/image";
import React from "react";
import { dayDataIcons } from "./dayAssets/dayData";

const CityList = ({ cityData }) => {
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

  return (
    <div className="">
      <div className="flex items-center rounded-lg justify-center p-3 mb-2 bg-base-800">
        {cityData?.forecast?.forecastday?.map((item) => (
          <div
            key={item?.date_epoch}
            className="flex flex-col w-[67px] justify-center items-center"
          >
            <span className="text-base-200 font-bold text-sm">
              {getDayOfWeek(item?.date).slice(0, 3)}
            </span>
            <span>
              <Image
                width={60}
                src={
                  dayDataIcons.find(
                    (icon) =>
                      icon.name.toLowerCase() ===
                      item?.day?.condition?.text.trim().toLowerCase()
                  )?.img || dayDataIcons[0]?.img
                }
                alt="result"
              />
            </span>
            <span className="min-max flex flex-col">
              <span className="text-base-100 font-bold text-sm">
                {Math.floor(item?.day?.maxtemp_c)}ºc
              </span>
              <span className="text-base-400 font-bold text-sm">
                {Math.floor(item?.day?.mintemp_c)}ºc
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;
