import React, { Component } from 'react';
import Radium from 'radium';

import {Topic} from '../../../../collections/topics.js';

class MessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message : ""
        }

        this.changeMsg = this.changeMsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeMsg(event) {this.setState({message: event.target.value});}

    onSubmit(event) {
        event.preventDefault();

        // Create new object
        /*let t = new Topic({
            title : this.state.title,
            description : this.state.description
        });

        // Save it
        t.save(function(res){
            console.log(res);
        });

        // Reset the form
        this.setState({
            message : ""
        })*/
    }

    render() {
        return (
            <div  className="row">
                <form onSubmit={this.onSubmit} action="">
                    <div className="large-12-columns">
                        <textarea placeholder="Topic Content" onChange={this.changeMsg} value={this.state.message}></textarea>
                    </div>
                    <div className="large-12-columns">
                        <input type="submit" value="Post" className="input" />
                    </div>
                </form>
            </div>)
    }
}

MessageForm.propTypes = {};

MessageForm.defaultProps = {};

export default Radium(MessageForm)
