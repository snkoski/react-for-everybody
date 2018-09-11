import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Person from './Person';

class HelloWorld extends Component {

  render() {
    let greeting = "World"
// Person only gets rendered if isPerson === true(passed from App.js)
    if (this.props.isPerson) {
      greeting = (<Person name={this.props.name} />)
    }

    return(
      <h1>Hello {greeting}</h1>
    )
  }
}HelloWorld.propTypes = {
  name: PropTypes.string,
  isPerson: PropTypes.bool
}



export default HelloWorld;
