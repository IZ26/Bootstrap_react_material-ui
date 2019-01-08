import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import {Header} from "./Layouts";
import Routes from "./Routes/router";

class App extends Component {
  render() {
    return (
      <Fragment>
          <Routes/>
      </Fragment>
    );
  }
}

export default App;
