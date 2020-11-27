import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../../styles.js";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import centerComplete from "./hardcode";

const CenterForm = ({ action, user }) => {
  const [value, setValue] = useState(null);

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      centerName: "",
      email: "",
      phone: null,
      place: "",
      lat: "",
      log: "",
      description: "",
      adminUser: {
        name: "",
        dni: "",
        phone: null,
        role: "admin",
      },
      validationSchema: Yup.object({
        centerName: Yup.string("Enter your Center Name")
          .min(2, "Too Short!")
          .required("A center name is required"),
        email: Yup.string("Enter Center email")
          .min(6, "Too Short!")
          .required("A center name is required"),
        phone: Yup.number("Enter your Center Phone")
          .min(5, "Too Short!")
          .required("A center name is required"),
        place: Yup.string("Enter your Center place")
          .min(4, "Too Short!")
          .required("A center name is required"),
      }),
    },

    onSubmit: (values) => {
      alert("ando");
    },
  });

  console.log(value);

  return (
    <Grid
      container
      className={action === "create" ? classes.root : classes.modal}
    >
      <CssBaseline />
      <Grid
        xs={12}
        component={Paper}
        className={action === "update" ? classes.paper2 : null}
      >
        <div>
          <TextField
            className={classes.margin}
            variant="outlined"
            id="nameCenter"
            name="nameCenter"
            label="Center Name"
            value={formik.values.nameCenter}
            onChange={formik.handleChange}
            error={
              formik.touched.nameCenter && Boolean(formik.errors.nameCenter)
            }
            helperText={formik.touched.nameCenter && formik.errors.nameCenter}
          />
          <TextField
            className={classes.margin}
            variant="outlined"
            id="email"
            email="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            className={classes.margin}
            variant="outlined"
            id="phone"
            email="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            className={classes.margin}
            variant="outlined"
            id="location"
            email="location"
            label="Location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.locacion && formik.errors.locacion}
          />
        </div>

        <div className={classes.buttons}>
          <Button
            type="add"
            variant="contained"
            className={classes.button}
            color="primary"
          >
            {user === "create" ? "Agregar Admin" : "Actulizar Admin"}
          </Button>
          <Button
            type="add"
            variant="contained"
            className={classes.button}
            color="primary"
          >
            Admin details
          </Button>
        </div>
        {action === "create" ? (
          <div>
            <TextField
              className={classes.descriptionField}
              id="description"
              email="description"
              label="Description"
              variant="outlined"
              value={formik.values.description}
              multiline
              rows={10}
              maxRows={20}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </div>
        ) : null}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {action === "create" ? "Agregar Centro" : "Actulizar Centro"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CenterForm;
