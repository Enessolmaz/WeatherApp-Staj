import Image from "next/image";
import React from "react";
import NotFoundCity from "./icons/location-not-found.png";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center mt-32">
      <div className="flex flex-col items-center gap-8">
        <Image
          src={NotFoundCity}
          alt="404"
          width={256}
          className="animate-pulse"
        />
        <span className="text-3xl text-base-100">Şehir Bulunamadı</span>
      </div>
    </div>
  );
};

export default NotFound;
