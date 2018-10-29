import React, { Component } from "react";

import Wizard from "./MultiForm/Wizard";
import PageOne from "./MultiForm/PageOne";
import PageTwo from "./MultiForm/PageTwo";
//import StartPage from "./MultiForm/StartPage";

import StyledContainer from "./MultiForm/Styles";

//import "../App.css";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div>
            <h1>Multistep / Form Wizard </h1>
            <StyledContainer>
              <Wizard
                initialValues={{
                  service_type: "",
                  firstName: "John",
                  lastName: "Doe",
                  email: "",
                  favoriteColor: "",
                  activegroup: "",
                  appliance: "",
                  electrical: "",
                  plumbing: ""
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
            </StyledContainer>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
