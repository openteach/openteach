import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';

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
        const that = this;
        this.props.newTopicMessage({
            topicId : this.props.topicId,
            message : this.state.message
        }, (error, result) => {
                // Reset the form
                that.setState({
                    message : ""
                });
        });
/*
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
        })*/
    }

    render() {
        let md = new Remarkable();
        let html = md.render(this.state.message);
        return (
            <form onSubmit={this.onSubmit}>
                <div  className="row">
                    <div className="row">
                        <div className="large-6 small-12 columns">
                            <div  className="row">
                                <div className="large-12 columns large-centered">
                                    <textarea placeholder="Answer Content" onChange={this.changeMsg}
                                        value={this.state.message} className="input"
                                        style={styles.textarea}></textarea>
                                </div>
                                <div className="large-12 columns large-centered">
                                    <input type="submit" value="Post" className="input button" />
                                </div>
                            </div>
                        </div>
                        <div className="large-6 small-12 columns">
                            <div  className="row">
                                <div className="markdown-body" style={styles.preview} dangerouslySetInnerHTML={ {__html: html} } />
                            </div>
                        </div>
                    </div>
                </div>
            </form>)
    }
}

MessageForm.propTypes = {
    topicId : React.PropTypes.string,
    newTopicMessage : React.PropTypes.func,
};

MessageForm.defaultProps = {};

const styles = {
    preview: {
        border: '1px dotted #aaa',
        height: '250px',
        padding: '3px'
    },
    textarea: {
        height: '250px',
    },
};

export default Radium(MessageForm)
