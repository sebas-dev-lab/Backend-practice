import React from "react";
import NavBar from "./NavBar";
import { CssBaseline, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Center from "./AdminCenters";
import Menu from "./Menu/index";
import MenuCenter from "./AdminCenters/MenuCenter";
import ResumeCenter from "./AdminCenters/CenterResume";
import CenterInventory from "./AdminCenters/CenterInventory";
import LocationCenters from "./AdminCenters/LocationCenters";

const AdminAppDashboard = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <NavBar classNavbar={classes} />
      <Grid container spacing={12}>
        <Router>
          <Grid item xs={2}>
            <Menu classMenu={classes} />
          </Grid>
          <Grid item xs={8}>
            <Route exact path="/admin/center">
              <ResumeCenter />
            </Route>
            <Route exact path="/admin/center/add">
              <Center />
            </Route>
            <Route exact path="/admin/center/inventory">
              <CenterInventory />
            </Route>
            <Route exact path="/admin/center/map">
              <LocationCenters />
            </Route>
          </Grid>
          <Grid item xs={2}>
            <Route path="/admin/center">
              <MenuCenter classMenu={classes} />
            </Route>
          </Grid>
        </Router>
      </Grid>

      <div className={classes.offset}></div>
    </>
  );
};

export default AdminAppDashboard;
