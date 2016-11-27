import React, { Component } from 'react';
import Radium from 'radium';

import {Topic} from '../../../../collections/topics.js';

class NewTopicForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : "",
            description : ""
        }

        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeTitle(event) {this.setState({title: event.target.value});}
    changeDescription(event) {this.setState({description: event.target.value});}

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        // Create new object
        const t = new Topic({
            title : this.state.title,
            description : this.state.description
        });

        // Save it
        t.save();

        // Reset the form
        this.setState({
            title : "",
            description : ""
        })
    }

    render() {
        return (
            <div  className="row">
                <form onSubmit={this.onSubmit} action="">
                    <div className="large-12-columns">
                        <input type="text" placeholder="Title" onChange={this.changeTitle} value={this.state.title} />
                    </div>
                    <div className="large-12-columns">
                        <textarea placeholder="Topic Content" onChange={this.changeDescription} value={this.state.description}></textarea>
                    </div>
                    <div className="large-12-columns">
                        <input type="submit" value="Create" className="input" />
                    </div>
                </form>
            </div>)
    }
}

NewTopicForm.propTypes = {};

NewTopicForm.defaultProps = {};

export default Radium(NewTopicForm)
