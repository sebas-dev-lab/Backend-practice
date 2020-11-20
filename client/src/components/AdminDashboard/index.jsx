import React from "react";
import NavBar from "./NavBar";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Center from "./AdminCenters";

import Menu from "./Menu/index";
import CenterForm from "./AdminCenters/CenterForm";

const AdminAppDashboard = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <NavBar classNavbar={classes} position="fixed" />
      <Grid container spacing={3}>
        <Router>
          <Grid item xs={3}>
            <Menu classMenu={classes} />
          </Grid>
          <Grid item xs={9}>
            <Route exact path="/admin/center">
              <Center />
            </Route>
          </Grid>
        </Router>
      </Grid>

      <div className={classes.offset}></div>
    </>
  );
};

export default AdminAppDashboard;
