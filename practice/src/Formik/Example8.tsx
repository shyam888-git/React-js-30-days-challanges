import * as Yup from "yup";
import { Formik, Form, FastField, ErrorMessage } from "formik";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});
const Example8 = () => {
  return (
    <div>
      <h1>Fast Fields</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => {
          return (
            <Form>
              <FastField type="text" name="name" placeholder="name" />
              <ErrorMessage name="name" />
              <br />
              <br />

              <FastField type="email" name="email" placeholder="email" />
              {/* fast field alwyas comes with values, touch,isSubmitting and errors it only re-renders when changes on those and it is used
              when the field are not dependent on other field. it is the optimized version of the field */}
              <ErrorMessage name="email" />
              <br />
              <br />

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Example8;
