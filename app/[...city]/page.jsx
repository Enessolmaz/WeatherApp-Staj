import React from "react";
import City from "../components/City/City";

const page = ({ params }) => {

  return (
    <div>
      <City city={params.city} />
    </div>
  );
};

export default page;
