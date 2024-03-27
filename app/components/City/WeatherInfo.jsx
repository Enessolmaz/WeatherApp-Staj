import React from "react";
import { icons } from "./icons/icons";
import Image from "next/image";

const WeatherInfo = () => {


  return (
    <div className=" flex flex-col w-full bg-base-800 divide-y   px-4 rounded-lg">
      {icons.map((item) => (
        <span
          key={item?.name}
          className="h-14 flex items-center justify-between border-base-700"
        >
          <div className="flex gap-4">
            <span className="icon">
              
              <Image
                src={item?.img}
                alt={item.name}
                className="text-red-500"
                width={24}
              />
            </span>
            <span className="text text-base-200 text-sm font-bold">
              {item.name}
            </span>
          </div>
          <span className="degree text-white  font-bold">{item.value}</span>
        </span>
      ))}
    </div>
  );
};

export default WeatherInfo;
