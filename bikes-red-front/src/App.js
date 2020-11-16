import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Components */
import HomePage from "./pages/HomPage";
import NavBar from "./components/navBar";
import TableMap from "./components/table/table";
import FormAddBike from "./components/table/formAdd/formAdd";
import FormUpdate from "./components/table/formUpdate/formUpdate";

/* Actions-Redux */
import { getBikes } from "./redux/actions/bikesActions";

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
      <NavBar />
      <Switch>
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
