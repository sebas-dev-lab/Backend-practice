import React, { useEffect, useState } from "react";
import MapBike from "../components/map";
import TableMap from "../components/table/table";
import axios from "axios";
import FormAddBike from "../components/table/formAdd/formAdd";

/* ==== Bikes ===== */
const url = "http://localhost:3001";

const HomePage = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/bikes/`)
      .then((res) => {
        console.log(res);
        setBikes(res.data.bikes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let allBikes = bikes;
  return (
    <div>
      <MapBike locBikes={allBikes} />
      <TableMap bks={allBikes} />
      <FormAddBike />
    </div>
  );
};

export default HomePage;
