import React from "react";
import NavBar from "./NavBar";
import { CssBaseline } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useStyles, StyledMenuItem, StyledMenu } from "./styles";

const AdminAppDashboard = () => {
  const classes = useStyles();
  const theme = useTheme();

  //TODO: Trabajar con un solo archivo makeStyles. Pasar por props las clases

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar classNavbar={classes} position="fixed" />
    </div>
  );
};

export default AdminAppDashboard;
