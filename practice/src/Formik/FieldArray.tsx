import { Formik, Form, FieldArray, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  emails: Yup.array().of(
    Yup.string().email("invalid email").required("Required")
  ),
});

const FieldArrayExample = () => {
  return (
    <div>
      <h1>Add and remove the email list using field array</h1>
      <Formik
        initialValues={{ emails: [""] }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => {
          return (
            <Form>
              <FieldArray name="emails">
                {({ remove, push }) => {
                  return (
                    <>
                      {values.emails.map((_, index) => {
                        return (
                          <div key={index}>
                            <Field
                              name={`emails.${index}`}
                              placeholder="enter emails"
                            />
                            <button type="button" onClick={() => remove(index)}>
                              remove
                            </button>
                          </div>
                        );
                      })}
                      <button type="button" onClick={() => push("")}>
                        Add Email
                      </button>
                    </>
                  );
                }}
              </FieldArray>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FieldArrayExample;
