import { Formik, Field, Form } from "formik";
import React from "react";

const Example6 = () => {
  return (
    <div>
      <Formik
        initialValues={{ picked: "", toggle: false, checked: [] }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => {return(
          <Form>
            <div id="radio-button-id">Radio Button</div>
            <div role="group" aria-labelledby="radio-button-id">
              <label>
                <Field type="radio" name="picked" value="two" />
                two
              </label>
              <label>
                <Field type="radio" name="picked" value="two" />
                two
              </label>
              <label>
                <Field type="radio" name="picked" value="three" />
                three
              </label>

              <div id="check-box">one checkbox for true or false</div>
              <label>
                <Field type="checkbox" name="toogle" />
                {`${values?.toggle}`}
              </label>

              <div id="check-box-id"> checkbox </div>
              <div role="group" aria-labelledby="checkbox-id">
                <label>
                  <Field type="checkbox" name="checked" value="java" />
                  Java
                </label>

                <label>
                  <Field type="checkbox" name="checked" value="Php" />
                  Php
                </label>

                <label>
                  <Field type="checkbox" name="checked" value="Pythond" />
                  Pythond
                </label>
              </div>

              <button type="submit">Submit</button>
            </div>
          </Form>
        )}}
      </Formik>
    </div>
  );
};

export default Example6;
