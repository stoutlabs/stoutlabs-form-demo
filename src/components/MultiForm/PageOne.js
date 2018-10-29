import React from "react";
import { Field, ErrorMessage, connect } from "formik";

import Wizard from "./Wizard";
import ApplianceInput from "./ApplianceInput";
import ElectricalInput from "./ElectricalInput";
import PlumbingInput from "./PlumbingInput";

import { ServiceTypes } from "./ServiceTypes";

const required = value => (value ? undefined : "Required");

function PageOne(props) {
  //console.log("page one props:", props);
  const currentType = props.formik.values.service_type;

  // may need adjusting
  const setServiceType = serviceType => {
    if (
      props.formik.values.service_type === "" ||
      props.formik.values.service_type === serviceType
    ) {
      props.formik.setFieldValue("service_type", serviceType);
      return true;
    }

    return false;
  };

  // check if current group is empty, and "unset" it if so
  const checkForReset = () => {
    const tempObj = props.formik.values[currentType];

    let items = [];
    for (const key in tempObj) {
      if (tempObj.hasOwnProperty(key)) {
        if (tempObj[key] !== "") items.push(tempObj[key]);
      }
    }

    if (items.length <= 1) {
      return true;
    }
    return false;
  };

  return (
    <Wizard.Page
      validate={values => {
        const errors = {};
        if (values.service_type === "") {
          errors.service_type = "Required";
        }

        return errors;
      }}
    >
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
      <Field type="hidden" name="service_type" />
      <ErrorMessage name="service_type" component="div" className="field-error" />
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

      <div className="services_container">
        <div
          className={`services_box ${
            currentType === "appliance" || currentType === "" ? "active-group" : ""
          }`}
        >
          <h3>Appliance Services</h3>
          {ServiceTypes.appliances.map((appliance, i) => {
            return (
              <ApplianceInput
                key={i}
                name={appliance.name}
                label={appliance.name}
                setServiceType={setServiceType}
                checkForReset={checkForReset}
              />
            );
          })}
        </div>

        <div
          className={`services_box ${
            currentType === "electrical" || currentType === "" ? "active-group" : ""
          }`}
        >
          <h3>Electrical Services</h3>
          {ServiceTypes.electrical.map((item, i) => {
            return (
              <ElectricalInput
                key={i}
                name={item.name}
                label={item.name}
                setServiceType={setServiceType}
                checkForReset={checkForReset}
                hasSymptoms={item.has_symptoms}
              />
            );
          })}
        </div>

        <div
          className={`services_box ${
            currentType === "plumbing" || currentType === "" ? "active-group" : ""
          }`}
        >
          <h3>Plumbing Services</h3>
          {ServiceTypes.plumbing.map((item, i) => {
            return (
              <PlumbingInput
                key={i}
                name={item.name}
                label={item.name}
                setServiceType={setServiceType}
                checkForReset={checkForReset}
                hasSymptoms={item.has_symptoms}
              />
            );
          })}
        </div>
      </div>
    </Wizard.Page>
  );
}

export default connect(PageOne);
