import React from "react";
import { Field, ErrorMessage } from "formik";

import Wizard from "./Wizard";
import Checkbox from "../Checkbox";
const required = value => (value ? undefined : "Required");

function PageTwo() {
  return (
    <Wizard.Page
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        }
        if (!values.favoriteColor) {
          errors.favoriteColor = "Required";
        }
        return errors;
      }}
    >
      <div>
        <label>Email</label>
        <Field name="email" component="input" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" className="field-error" />
      </div>
      <div>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component="select">
          <option value="">Select a Color</option>
          <option value="#ff0000">❤️ Red</option>
          <option value="#00ff00">💚 Green</option>
          <option value="#0000ff">💙 Blue</option>
        </Field>
        <ErrorMessage name="favoriteColor" component="div" className="field-error" />
      </div>
    </Wizard.Page>
  );
}

export default PageTwo;
