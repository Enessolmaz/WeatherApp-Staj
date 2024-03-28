import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { citiesData } from "./cityDATA";

const Popover = ({
  city,
  setClickedCity,
  clickedCity,
  setLoading,
  cityFilter,
}) => {
  const getCity = (clickedPopUpCity) => {
    setLoading(true);
    try {
      setClickedCity(clickedPopUpCity);
      setLoading(false);
    } catch (error) {}
  };

  const citiesDataFilter = citiesData.filter((sehir) =>
    sehir.name.toLowerCase().includes(cityFilter.toLowerCase())
  );
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (citiesDataFilter.length < 5 || city) {
      const newdata = [...citiesDataFilter, city];
      if (JSON.stringify(filtered) !== JSON.stringify(newdata)) {
        setFiltered(newdata);
      }
    }
  }, [city, citiesDataFilter, filtered]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 5 } }}
      animate={{ opacity: 1 }}
      className="absolute -bottom-2 w-full "
    >
      {clickedCity.length > 2 ? (
        ""
      ) : (
        <div className="flex flex-col absolute transition-all w-full divide gap-[1px]  ">
          {filtered.map((item, idx) => (
            <Link
              key={idx}
              onClick={(e) => getCity(e.target.innerHTML)}
              href={`/${item.name || item}`}
              className={`w-full h-14  text-base-100 transition-all flex bg-popover items-center pl-6 hover:bg-base-700  ${
                filtered?.length === 1
                  ? "rounded-lg"
                  : idx === 0
                  ? "rounded-tl-lg rounded-tr-lg"
                  : idx === filtered?.length - 1
                  ? "rounded-bl-lg rounded-br-lg mb-4"
                  : ""
              }`}
            >
              {item.name || item}
            </Link>
          ))}
        </div>
      )}
      {/* {citiesDataFilter?.map((item, idx) => (
            <Link
              key={idx}
              onClick={getCity}
              href={`/${city}`}
              className="w-full h-14 text-base-100 flex transition-all bg-popover
            items-center pl-6 rounded-lg"
            >
              {item.name}
            </Link>
          ))} */}
    
    </motion.div>
  );
};

export default Popover;
