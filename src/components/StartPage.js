import React from "react";
import { Field, ErrorMessage } from "formik";

import Wizard from "./Wizard";
import Checkbox from "./Checkbox";
const required = value => (value ? undefined : "Required");

function PageOne() {
  return (
    <Wizard.Page>
      <div>
        <label>Service Department:</label>
        <Field name="service_dept" component="select">
          <option value="">Select Department</option>
          <option value="heating-and-ac">Heating and AC</option>
          <option value="appliances">Appliances</option>
          <option value="electrical">Electrical</option>
        </Field>
        <ErrorMessage name="service_dept" component="div" className="field-error" />
      </div>
    </Wizard.Page>
  );
}

export default PageOne;
