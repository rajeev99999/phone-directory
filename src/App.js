import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './Header';

class  App extends Component {

  render(){
  return (
    <div className="App">
      <Header/>
      <div>
        <button>Add</button>
        <div>
          <span>Name:</span>
          <span>Phone No:</span>
        </div>
      </div>
      
    </div>
  );
  }
}

export default App;
