import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './Header';

class  App extends Component {

  render(){
    let subscribers=[
      {
        id:1,
        name:"Shilpa Bhat",
        phone:9999999999
      },
      {
        id:2,
        name:"Srishti Gupta",
        phone:88888888888
      }
    ]
  return (
    <div className="App">
      <Header heading="Phone Directory"/> 
      
      <div className="component-body-container">
        <div className="custom-btn add-btn">Add</div>
        <div className="grid-container heading-container">
          <span className="grid-tem name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          subscribers.map(sub =>{
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn">Delete</button>
              </span>
              </div>
          }
            )
        }

      </div>
      
    </div>
  );
  }
}

export default App;
