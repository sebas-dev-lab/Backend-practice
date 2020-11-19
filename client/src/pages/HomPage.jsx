import React, { useEffect, useState } from "react";
import MapBike from "../components/map";
import AdminAppDashboard from "../components/AdminDashboard/index";
import NavBar from "../components/navBar";
const HomePage = ({ bikes }) => {
  return (
    <div>
      <NavBar />
      {/* <Header /> */}
      {/* <MapBike locBikes={bikes} /> */}
    </div>
  );
};

export default HomePage;
