import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1> Hello {this.props.name}</h1>
      </div>
    )
  }

}

// Setting default props in ES6
App.defaultProps = {
    name: "Me"
}

// Making sure props are the right type ES6
App.propTypes = {
  name: PropTypes.string
}

export default hot(module)(App);
