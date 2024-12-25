import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});
const Example7 = () => {
  return (
    <div>
      <h1>Sign up page</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
            <br />
            <br />

            <Field type="email" name="email" />
            <ErrorMessage name="email" />
            <br />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Example7;
