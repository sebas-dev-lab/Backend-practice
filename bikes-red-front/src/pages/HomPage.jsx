import React, { useEffect, useState } from "react";
import MapBike from "../components/map";
import AdminAppDashboard from "./AdminAppDashboard";

const HomePage = ({ bikes }) => {
  return (
    <div>
      {/* <Header /> */}
      {/* <MapBike locBikes={bikes} /> */}
      <AdminAppDashboard />
    </div>
  );
};

export default HomePage;
