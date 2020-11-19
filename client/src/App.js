import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Components */
import HomePage from "./pages/HomPage";
import NavBar from "./components/navBar";
import TableMap from "./components/table/table";
import FormAddBike from "./components/table/formAdd/formAdd";
import FormUpdate from "./components/table/formUpdate/formUpdate";
import AdminAppDashboard from "./components/AdminDashboard";

/* Actions-Redux */
import { getBikes } from "./redux/actions/bikesActions";

/* LESS */
import "./Styles/globalStyle.less";

function App() {
  const dispatch = useDispatch();
  const allBikes = useSelector((state) => state.bikes);

  let bikes;
  if (allBikes.length > 0) {
    bikes = allBikes;
  }
  console.log(bikes);

  useEffect(() => {
    dispatch(getBikes());
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/admin" component={AdminAppDashboard} />
        <Route exact path="/">
          <HomePage bikes={bikes} />
        </Route>
        <Route exact path="/bikes">
          <TableMap bks={bikes} />
        </Route>
        <Route exact path="/bikes/create" component={FormAddBike} />
        <Route exact path="/bikes/update" component={FormUpdate} />
      </Switch>
    </div>
  );
}

export default App;
