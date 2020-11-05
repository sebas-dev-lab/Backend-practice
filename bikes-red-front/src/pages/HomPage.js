import React, { useEffect, useState } from "react";
import MapBike from "../components/map";

const HomePage = ({ bikes }) => {
  return (
    <div>
      {/* <Header /> */}
      <MapBike locBikes={bikes} />
    </div>
  );
};

export default HomePage;
