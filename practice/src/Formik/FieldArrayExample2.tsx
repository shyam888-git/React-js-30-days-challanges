import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  address: Yup.array().of(
    Yup.object().shape({
      country: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
    })
  ),
});

const FieldArrayExample2 = () => {
  return (
    <div>
      <h2>Dynamic input field for address</h2>
      <Formik
        initialValues={{ address: [{ country: "", city: "" }] }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values, "values");
        }}
      >
        {({ values }) => {
          return (
            <Form>
              <FieldArray name="address">
                {({ remove, push }) => {
                  return (
                    <>
                      {values.address?.map((_, index) => {
                        return (
                          <div key={index}>
                            <Field
                              type="text"
                              name={`address.${index}.country`}
                              placeholder="Enter address"
                            />
                            <ErrorMessage name={`address.${index}.country`} />
                            <Field
                              type="text"
                              name={`address.${index}.city`}
                              placeholder="Enter city"
                            />
                            <ErrorMessage name={`address.${index}.city`} />
                            <button type="button" onClick={() => remove(index)}>
                              remove
                            </button>
                          </div>
                        );
                      })}
                      <br />
                      <br />
                      <button
                        type="button"
                        onClick={() => push({ country: "", city: "" })}
                      >
                        Add address
                      </button>
                    </>
                  );
                }}
              </FieldArray>
              <button type="submit">Submit </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FieldArrayExample2;
