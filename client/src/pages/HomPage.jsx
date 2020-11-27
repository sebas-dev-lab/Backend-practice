import React, { useEffect, useState } from "react";
import Map from "../components/map";
import AdminAppDashboard from "../components/AdminDashboard/index";
import NavBar from "../components/navBar";
const HomePage = ({ bikes }) => {
  return (
    <div>
      <NavBar />

      <Map loc={bikes} />
    </div>
  );
};

export default HomePage;
