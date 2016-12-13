import React, { Component } from 'react';
import Radium from 'radium';

import {TopicMessage} from '../../../../collections/topic-messages.js';

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
        let tm = new TopicMessage({
            message : this.state.message,
            topicId : this.props.topicId,
            author  : "Author"
        });

        // Save it
        tm.save();

        // Reset the form
        this.setState({
            message : ""
        })
    }

    render() {
        return (
            <div  className="row">
                <form onSubmit={this.onSubmit} action="">
                    <div className="large-8 medium-10 columns small-12 large-centered">
                        <textarea placeholder="Topic Content" onChange={this.changeMsg} value={this.state.message}></textarea>
                        <input type="submit" value="Post" className="input button" />
                    </div>
                </form>
            </div>)
    }
}

MessageForm.propTypes = {
    topicId : React.PropTypes.string
};

MessageForm.defaultProps = {};

export default Radium(MessageForm)
