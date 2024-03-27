import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Popover = ({ city, setClickedCity, clickedCity, setLoading }) => {
  
  
  const getCity = () => {
    setLoading(true);
    try {
      setClickedCity(city);
      setLoading(false);
    } catch (error) {}
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 5 } }}
      animate={{ opacity: 1 }}
      className="absolute -bottom-16 w-full "
    >
      {clickedCity.length > 0 ? (
        ""
      ) : (
        <Link
          onClick={getCity}
          href={`/${city}`}
          className="w-full h-14 text-base-100 flex transition-all bg-popover
          items-center pl-6 rounded-lg"
        >
          {city}
        </Link>
      )}
    </motion.div>
  );
};

export default Popover;
