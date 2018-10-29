import React, { Component } from "react";
import { Field, connect } from "formik";

import styled from "styled-components";

const applianceBrands = {
  brands: ["Maytag", "Samsung", "Whirlpool", "Kenmore", "N/A"]
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
      <option value={""}>Choose Brand</option>
      {applianceBrands.brands.map((brand, i) => {
        return (
          <option key={i} value={brand}>
            {brand}
          </option>
        );
      })}
    </select>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

export class ApplianceInput extends Component {
  state = {
    checked: this.props.formik.values.appliance[`${this.props.name}`] || ""
  };

  handleToggle = () => {
    const canSet = this.props.setServiceType("appliance");
    //this.props.formik.setTouched("service_type", true);

    if (canSet) {
      this.setState(
        prevState => ({
          checked: !prevState.checked
        }),
        () => {
          if (!this.state.checked) {
            //need to reset the associated field's value here (or unset it if possible)

            const doUnsetType = this.props.checkForReset();
            if (doUnsetType) {
              this.props.formik.setFieldValue(`service_type`, "");
              this.props.formik.setFieldValue(`appliance`, "");
            } else {
              this.props.formik.setFieldValue(`appliance.${this.props.name}`, "");
            }
          } else {
            this.props.formik.setFieldValue(
              `appliance.${this.props.name}`,
              applianceBrands.brands[0]
            );
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
            name={`toggle_${this.props.name}`}
            type="checkbox"
            onChange={this.handleToggle}
            checked={this.state.checked}
          />
          {this.props.label}
        </label>

        <div className={this.state.checked ? "show" : "hide"}>
          <label>Select Brand:</label>
          <Field name={`appliance.${this.props.name}`} component={CustomInputComponent} />
        </div>
      </StyledTestInput>
    );
  }
}

export default connect(ApplianceInput);
