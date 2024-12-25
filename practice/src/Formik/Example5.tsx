import { Field, Form, Formik } from "formik";

const Example5 = () => {
  return (
    <div>
      <h1>Sign up </h1>
      <Formik
        initialValues={{ toggle: false, checked: [] }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, errors }) => {
          console.log(values, "errors");
          return (
            <Form>
              <label>
                <Field type="checkbox" name="toggle" />
                {`${values.toggle}`}
              </label>
              <div id="checkbox-group">Checkbox</div>
              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="checked" value="one" />
                  one
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="two" />
                  two
                </label>

                <label>
                  <Field type="checkbox" name="checked" value="three" />
                  three
                </label>
                <button type="submit">Submit</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Example5;
