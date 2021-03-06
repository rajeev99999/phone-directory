
import './ShowSubscribers.css';
import React, { Component } from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

class  ShowSubscribers extends Component {


  // constructor(){
  //   super();
  //   this.state={
  //   subscribersListToShow :[]
  //   }
  // }

  // componentDidMount(){
  //   let newSubscriber={
  //     id:1,
  //     name: 'Shilpa Bhat',
  //     phone:9999999999
  //   }
  //   let subscriberList = this.state.subscribersListToShow;
  //   subscriberList.push(newSubscriber);
  //   this.setState({
  //     subscribersListToShow: subscriberList
  //   })
  // }

  onDeleteClick = (subscriberId) =>{
    this.props.deleteSubscriberHandler(subscriberId);
  }

  render(){
    // let subscribers=[
      // {
      //   id:1,
      //   name:"Shilpa Bhat",
      //   phone:9999999999
      // },
      // {
      //   id:2,
      //   name:"Srishti Gupta",
      //   phone:88888888888
      // }
    // ]
  return (
    <div className="App">
      <Header heading="Phone Directory"/> 
      
      <div className="component-body-container">
        {/* <div className="custom-btn add-btn">Add</div> */}
        <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>
        <div className="grid-container heading-container">
          <span className="grid-tem name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {/* {
          this.state.subscribersListToShow.map(sub =>{
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn">Delete</button>
              </span>
              </div>
          }
            )
        } */}

{
          this.props.subscribersList.map(sub =>{
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={this.onDeleteClick.bind(this,sub.id)}>Delete</button>
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

export default ShowSubscribers;
