import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Person from './Person';

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    }
    this._addByOne = this._addByOne.bind(this)
  }

  componentDidMount() {
    this.setState({
      value: 2
    })
  }

  _addByOne() {
    this.setState({
      value: this.state.value + 1
    })
  }

  render() {
    let greeting = "World"
// Person only gets rendered if isPerson === true(passed from App.js)
    if (this.props.isPerson) {
      greeting = (<Person name={this.props.name} />)
    }

    return(
      <div>
        <h1>Hello {greeting}</h1>
        {this.state.value}
        <button onClick={this._addByOne}>Click Me</button>
      </div>
    )
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  isPerson: PropTypes.bool
}

export default HelloWorld;
