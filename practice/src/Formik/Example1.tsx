import { Formik, useFormik } from "formik";
import React from "react";

const Example1 = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <br />
      <br />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <br />
      <br />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <br />

      <button type="submit" disabled={formik.isSubmitting}>
        Submit{" "}
      </button>
    </form>
  );
};

export default Example1;
