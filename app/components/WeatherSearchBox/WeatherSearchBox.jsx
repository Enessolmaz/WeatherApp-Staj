"use client"
import InputField from "./InputField";

const WeatherSearchBox = () => {
  return (
    <div className="flex absolute w-full bottom-0 top-0   items-center justify-center text-center transition-all ">
      <div className="flex flex-col relative gap-8">
        <div className="flex flex-col">
          <span className="text-base-100 text-[20px]">
            Welcome to <span className="text-product">TypeWeather</span>
          </span>
          <span className="text-base-200 text-[14px] font-normal">
            Choose a location to see the weather forecast
          </span>
        </div>

        <InputField />
      </div>
    </div>
  );
};

export default WeatherSearchBox;
