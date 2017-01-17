import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';

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
        let that = this;
        this.props.newTopic({
            title : this.state.title,
            description : this.state.description,
            contractId : this.props.contract._id
        }, (error, result) => {
            if(error){
                console.log(error);
                return;
            }
            // Reset the form
            that.setState({
                title : "",
                description : ""
            });
            FlowRouter.go("topicRoute", {"id" : result._id})
        });
    }

    render() {
        let md = new Remarkable();
        let html = md.render(this.state.description);
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <h1>New Topic</h1>
                </div>
                <div className="row">
                    <div className="large-6 small-12 columns">
                        <div  className="row">
                            <div className="large-12 columns large-centered">
                                <input type="text" placeholder="Title"
                                    onChange={this.changeTitle} value={this.state.title} className="input" />
                            </div>
                            <div className="large-12 columns large-centered">
                                <textarea placeholder="Topic Content" onChange={this.changeDescription}
                                    value={this.state.description} className="input"
                                    style={styles.textarea}></textarea>
                            </div>
                            <div className="large-12 columns large-centered">
                                <input type="submit" value="Create" className="input button" />
                            </div>
                        </div>
                    </div>

                    <div className="large-6 small-12 columns">
                        <div className="card">
                            <div className="content">
                                <span className="title">
                                    {this.state.title}
                                </span>
                                <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                            </div>
                            <div className="action row">
                                <div className="large-8 small-8 columns">
                                    <a>tag1</a>
                                </div>
                                <div className="large-4 columns text-right pull-right">{Meteor.user().profile.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>)
    }
}

TopicNewForm.propTypes = {
    newTopic : React.PropTypes.func,
    contract : React.PropTypes.object
};

TopicNewForm.defaultProps = {};

const styles = {
    preview: {
        border: '1px dotted #aaa',
        height: '250px',
        padding: '3px'
    },
    textarea: {
        height: '250px',
    }
};

export default Radium(TopicNewForm)
