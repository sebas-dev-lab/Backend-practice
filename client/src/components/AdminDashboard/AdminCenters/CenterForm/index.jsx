import React from "react";
import { useFormik } from "formik";

const CenterForm = () => {
  const formik = useFormik({
    initialValues: {
      centerName: "",
      email: "",
      phone: null,
      loaction: "",
      description: "",
      adminUser: {
        name: "",
        dni: "",
        phone: null,
        role: "admin",
      },
    },
    onSubmit: (values) => {
      alert("ando");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <lable htmlFor="centerName">Center name</lable>
      <input
        id="centerName"
        name="centerName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.centerName}
      />
      <br />

      <lable htmlFor="centerName">Email</lable>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />

      <lable htmlFor="centerName">Phone</lable>
      <input
        id="phone"
        name="phone"
        type="Number"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <br />
      <lable htmlFor="centerName">Loaction</lable>
      <input
        id="loaction"
        name="loaction"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.loaction}
      />
      <br />
      <lable htmlFor="centerName">Loaction</lable>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CenterForm;
