import React, { useEffect, useState } from "react";
import MapBike from "../components/map";
import TableMap from "../components/table/table";
import axios from "axios";

const HomePage = ({ bikes }) => {
  return (
    <div>
      {/* <Header /> */}
      <MapBike locBikes={bikes} />
    </div>
  );
};

export default HomePage;
