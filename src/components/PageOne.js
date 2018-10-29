import React from "react";
import { Field, ErrorMessage } from "formik";

import Wizard from "./Wizard";
import ApplianceInput from "./ApplianceInput";

const required = value => (value ? undefined : "Required");

function PageOne(props) {
  console.log("page one props:", props);
  return (
    <Wizard.Page>
      <div>
        <label>First Name</label>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
          validate={required}
        />
        <ErrorMessage name="firstName" component="div" className="field-error" />
      </div>
      <div>
        <label>Last Name</label>
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder="Last Name"
          validate={required}
        />
        <ErrorMessage name="lastName" component="div" className="field-error" />
      </div>

      <div>
        <ApplianceInput name="refrigerator" label="Refrigerator" values={props.values} />
        <ApplianceInput name="range" label="Range" values={props.values} />
        <ApplianceInput name="microwave" label="Microwave" values={props.values} />
        <ApplianceInput name="oven" label="Oven" values={props.values} />
      </div>
    </Wizard.Page>
  );
}

export default PageOne;
