import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/HomPage";
/* Routes */
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import TableMap from "./components/table/table";
import FormAddBike from "./components/table/formAdd/formAdd";
import FormUpdate from "./components/table/formUpdate/formUpdate";
const url = "http://localhost:3001";

function App() {
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
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} bikes={allBikes} />
        <Route exact path="/bikes/" component={TableMap} bks={allBikes} />
        <Route exact path="/bikes/create" component={FormAddBike} />
        <Route exact path="/bikes/update" component={FormUpdate} />
      </Switch>
    </div>
  );
}

export default App;
