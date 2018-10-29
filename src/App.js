import React, { Component } from "react";

import Wizard from "./components/Wizard";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import StartPage from "./components/StartPage";

import "./App.css";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div>
            <h1>Multistep / Form Wizard </h1>
            <Wizard
              initialValues={{
                service_dept: "",
                firstName: "",
                lastName: "",
                email: "",
                favoriteColor: "",
                appliance: {
                  refrigerator: "",
                  oven: "",
                  range: "",
                  microwave: ""
                }
              }}
              onSubmit={(values, actions) => {
                sleep(300).then(() => {
                  window.alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                });
              }}
            >
              <PageOne />
              <PageTwo />
            </Wizard>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
