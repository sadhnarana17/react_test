import React from 'react';
import s from './style.css';
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>     
        <h1 className={'content'}>Welcome to home !</h1>
        <img src="/images/yellow_rose.jpeg" />
        <p className={'hello'}>test</p>
        <p>Runs a function before any of the tests in this file run. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running tests.</p>
      </div>
    );
  }
}

export default withRouter(Home); 