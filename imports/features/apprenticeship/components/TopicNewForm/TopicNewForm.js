import React, { Component } from 'react';
import Radium from 'radium';

import {Topic} from '../../../../collections/topics.js';

class TopicNewForm extends Component {

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
        let t = new Topic({
            title : this.state.title,
            description : this.state.description
        });

        // Save it
        t.save(function(res){
            console.log(res);
        });

        // Reset the form
        this.setState({
            title : "",
            description : ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} action="">
                <div  className="row">
                    <div className="large-12 columns large-centered">
                        <input type="text" placeholder="Title" onChange={this.changeTitle} value={this.state.title} className="input" />
                    </div>
                    <div className="large-12 columns large-centered">
                        <textarea placeholder="Topic Content" onChange={this.changeDescription} value={this.state.description} className="input"></textarea>
                    </div>
                    <div className="large-12 columns large-centered">
                        <input type="submit" value="Create" className="input button" />
                    </div>
                </div>
            </form>)
    }
}

TopicNewForm.propTypes = {};

TopicNewForm.defaultProps = {};

export default Radium(TopicNewForm)
