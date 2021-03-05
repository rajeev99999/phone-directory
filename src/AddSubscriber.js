import React, {Component} from 'react'
import Header from './Header.js'
import './AddSubscriber.css'

class AddSubscriber extends Component{
    render(){
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button><br/><br/>
                    <form className="subscrier-form">
                        <label htmlFor="name" className="label-control">Name:</label><br/>
                        <input id="name" type="text" className="input-control"/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone:</label><br/>
                        <input id="phone" type="text" className="input-control"/><br/><br/>
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-hading">Subscriber to be added:</span><br/>
                            <span className="subscriber-info">Name:</span><br/>
                            <span className="subscriber-info">Phone:</span>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;