import React, { Component } from "react";
import { Formik, Field, ErrorMessage } from "formik";

import { Debug } from "./Debug.js";

export class Wizard extends Component {
  static Page = ({ children }) => <div>{children}</div>;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues
    };
  }

  next = values => {
    this.setState(prevState => ({
      page: Math.min(prevState.page + 1, this.props.children.length - 1),
      values
    }));
  };

  previous = () => {
    this.setState(prevState => ({
      page: Math.max(prevState.page - 1, 0)
    }));
  };

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[this.state.page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values, bag);
    } else {
      this.next(values);
      bag.setTouched({});
      bag.setSubmitting(false);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ values, handleSubmit, isSubmitting, handleReset, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <button type="button" className="secondary" onClick={this.previous}>
                  Previous
                </button>
              )}

              {!isLastPage && <button type="submit">Next</button>}

              {isLastPage && (
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              )}
            </div>

            <Debug />
          </form>
        )}
      />
    );
  }
}

export default Wizard;
