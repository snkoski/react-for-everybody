import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import PropTypes from 'prop-types';
import './App.css';
// import HelloWorld from './components/HelloWorld';
import ContactsList from './components/ContactsList';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Contacts List</h1>
        <ContactsList />
        {/* <HelloWorld name="Shawn" isPerson={true}/> */}
      </div>
    )
  }

}

// Setting default props in ES6
// App.defaultProps = {
//     name: "Me"
// }

// Making sure props are the right type ES6
// App.propTypes = {
//   name: PropTypes.string
// }

export default hot(module)(App);
