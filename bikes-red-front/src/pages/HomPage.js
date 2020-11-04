import React from "react";
import MapBike from "../components/map";
import TableMap from "../components/table/table";
import axios from "axios";

/* ==== Provisorio ==== */
// let allBikes = [
//   {
//     id: 1,
//     color: "red",
//     model: "urban",
//     location: [-26.5382994, -59.3446029],
//   },
//   {
//     id: 2,
//     color: "blue",
//     model: "terrain",
//     location: [-26.539125, -59.3435837],
//   },
//   {
//     id: 3,
//     color: "green",
//     model: "urban",
//     location: [-26.53, -59.343],
//   },
// ];
/* ==== Bikes ===== */
let allBikes;
const url = "http://localhost:3001";
axios
  .get(`${url}/bikes/`)
  .then((res) => {
    console.log(res);
    allBikes = res.data.bikes;
  })
  .catch((err) => {
    console.log(err);
  });

const HomePage = () => {
  return (
    <div>
      <MapBike locBikes={allBikes} />
      <TableMap bks={allBikes} />
    </div>
  );
};

export default HomePage;
