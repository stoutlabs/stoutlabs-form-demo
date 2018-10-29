import React, { Component } from "react";
import { Field, connect } from "formik";

import styled from "styled-components";

const electricalIssues = {
  issues: ["Issue 1", "Issue 2", "Lorem Ipsum", "Dolor Sit Amet", "N/A"]
};

const StyledTestInput = styled.div`
  padding: 1rem 0;

  input[type="checkbox"] {
    padding: 4px;
  }

  div.show {
    height: auto;
    opacity: 1;
    visibility: visible;
    transition: opacity 250ms ease-out 1ms, height 100ms linear 1ms, visibility 0ms linear 10ms;
  }

  div.hide {
    height: 1px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 250ms ease-out 1ms, height 100ms linear 1ms, visibility 0ms linear 248ms;
  }
`;

const CustomInputComponent = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <select {...field} {...props}>
      {electricalIssues.issues.map((issue, i) => {
        return (
          <option key={i} value={issue}>
            {issue}
          </option>
        );
      })}
    </select>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

export class ElectricalInput extends Component {
  state = {
    checked: this.props.formik.values.electrical[`${this.props.name}`] || ""
  };

  handleToggle = () => {
    const canSet = this.props.setServiceType("electrical");

    if (canSet === true) {
      this.setState(
        prevState => ({
          checked: !prevState.checked
        }),
        () => {
          if (!this.state.checked) {
            //need to reset the associated field's value here (or unset it if possible)

            console.log("reset here");
            const doUnsetType = this.props.checkForReset();
            if (doUnsetType) {
              this.props.formik.setFieldValue(`service_type`, "");
              this.props.formik.setFieldValue(`electrical`, "");
            } else {
              this.props.formik.setFieldValue(`electrical.${this.props.name}`, "");
            }
          } else {
            if (this.props.hasSymptoms) {
              this.props.formik.setFieldValue(
                `electrical.${this.props.name}`,
                electricalIssues.issues[0]
              );
            } else {
              this.props.formik.setFieldValue(`electrical.${this.props.name}`, true);
            }
          }
        }
      );
    }
  };

  render() {
    return (
      <StyledTestInput>
        <label>
          <input
            name={`electrical.${this.props.name}`}
            type="checkbox"
            onChange={this.handleToggle}
            checked={this.state.checked}
          />
          {this.props.label}
        </label>

        <div className={this.props.hasSymptoms && this.state.checked ? "show" : "hide"}>
          <label>Choose Issue: </label>
          <Field name={`electrical.${this.props.name}`} component={CustomInputComponent} />
        </div>
      </StyledTestInput>
    );
  }
}

export default connect(ElectricalInput);
