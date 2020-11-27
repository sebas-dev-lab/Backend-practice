import React from "react";
import CenterForm from "./CenterForm";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles.js";

const Center = () => {
  const classes = useStyles();
  //TODO: Pasar por props las locaciones de los centros.
  //TODO: Estos deben crearse al registrase cada centro.
  //TODO: El registro del centro debe ser llevado a cabo por Admin del centro a travez del email.
  //TODO: DEsde el panel del AdminApp se debe poder ver detalles del centro y modificarlo. Y visualizarlo en el mapa
  const action = "create";
  return (
    <div className={classes.admin}>
      <CenterForm action={action} />
    </div>
  );
};

export default Center;
