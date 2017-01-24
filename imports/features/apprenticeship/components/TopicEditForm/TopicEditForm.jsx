import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';
import ReactTags from 'react-tag-autocomplete';

class TopicEditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error : "",
            title : "",
            description : "",
            tags: [],
            submitText : this.props.topic ? "Update" : "Create",
            suggestions: this.props.contract.tags.map(function(t, i){return {id : i, name : t}})
        }

        if(this.props.topic){
            let t = this.props.topic;
            this.state.title = t.title;
            this.state.description = t.description;
            this.state.tags = t.tags.map(function(t, i){return {id : i, name : t}});
        }

        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
    }

    changeTitle(event) {this.setState({title: event.target.value});}
    changeDescription(event) {this.setState({description: event.target.value});}

    handleDelete(i) {
        var tags = this.state.tags
        tags.splice(i, 1)
        this.setState({ tags: tags })
    }
    handleAddition(tag) {
        var tags = this.state.tags
        tags.push(tag)
        this.setState({ tags: tags })
    }

    onSubmit(event) {
        event.preventDefault();
        let that = this;

        if(this.props.topic){ // We update existing
            this.props.updateTopic({
                title : this.state.title,
                description : this.state.description,
                tags : this.state.tags.map((t) => t.name),
                oldTopic : this.props.topic
            }, (error, result) => {
                if(that.props.callback)
                    that.props.callback("update", error, result);
                if(error){
                    that.state.error = error.reason;
                    console.log(error);
                    return;
                }
                FlowRouter.go("topicRoute", {"id" : result._id})
            });
        } else { // We create a new topic
            this.props.newTopic({
                title : this.state.title,
                description : this.state.description,
                tags : this.state.tags.map((t) => t.name),
                contractId : this.props.contract._id
            }, (error, result) => {
                if(error){
                    that.state.error = error.reason;
                    console.log(error);
                    return;
                }
                FlowRouter.go("topicRoute", {"id" : result._id});
            });
        }
    }

    renderError() {
        if(this.state.error !== ""){
            return (
                <div className="large-12 columns large-centered">
                    <div className="callout alert">
                        {this.state.error}
                    </div>
                </div>
            )
        }
    }

    render() {
        let md = new Remarkable();
        let html = md.render(this.state.description);
        const tags = this.state.tags.map((t, i) => (<a key={i}>{t.name}</a>))
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <h1>New Topic</h1>
                </div>
                <div className="row">
                    <div className="large-6 small-12 columns">
                        <div  className="row">
                            {this.renderError()}
                            <div className="large-12 columns large-centered">
                                <input type="text" placeholder="Title"
                                    onChange={this.changeTitle} value={this.state.title} className="input" />
                            </div>
                            <div className="large-12 columns large-centered">
                                <textarea placeholder="Topic Content" onChange={this.changeDescription}
                                    value={this.state.description} className="input"
                                    style={styles.textarea}></textarea>
                            </div>
                            <div className="large-12 columns">
                                <ReactTags
                                    tags={this.state.tags}
                                    suggestions={this.state.suggestions}
                                    handleDelete={this.handleDelete}
                                    handleAddition={this.handleAddition}
                                    allowNew={true} />
                            </div>
                            <div className="large-12 columns large-centered">
                                <input type="submit" value={this.state.submitText} className="input button" />
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
                                    {tags}
                                </div>
                                <div className="large-4 columns text-right pull-right">{Meteor.user().profile.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>)
    }
}

TopicEditForm.propTypes = {
    newTopic    : React.PropTypes.func,
    updateTopic : React.PropTypes.func,
    callback    : React.PropTypes.func, // run everytime an action has been performed
    contract    : React.PropTypes.object,
    topic       : React.PropTypes.object,
};

TopicEditForm.defaultProps = {};

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

export default Radium(TopicEditForm)
