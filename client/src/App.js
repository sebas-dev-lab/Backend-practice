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
import CssBaseline from "@material-ui/core/CssBaseline";
import Center from "./components/AdminDashboard/AdminCenters";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Styles/themeConfig";
import { useStyles } from "./components/AdminDashboard/styles";
import CenterForm from "./components/AdminDashboard/AdminCenters/CenterForm";

function App() {
  const classes = useStyles();

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        {/*====== Admin dashboard ======== */}
        <Route exact path="/admin" component={AdminAppDashboard} />
        <Route exat path="/admin/center" component={Center} />
        <Route exact path="/">
          <HomePage bikes={bikes} />
        </Route>
        <Route exact path="/bikes">
          <TableMap bks={bikes} />
        </Route>
        <Route exact path="/bikes/create" component={FormAddBike} />
        <Route exact path="/bikes/update" component={FormUpdate} />
      </Switch>
      <div className={classes.offset}></div>
    </ThemeProvider>
  );
}

export default App;
