import React, { Component } from 'react';
import Radium from 'radium';
import MessageForm from '../MessageForm';
import Remarkable from 'remarkable';

class TopicView extends Component {

    renderMessageList() {
        let messages = this.props.messages;
        return messages.map((m) => {
            let md = new Remarkable();
            let html = md.render(m.message);
            return (<div className="row" key={m._id}>
                        <div className="card large-12 medium-12 small-12">
                            <div className="content">
                                <span className="title">{m.author}</span>
                                <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                            </div>
                            <div className="action">
                                <a>tag?</a>
                            </div>
                        </div>
                    </div>)
                });


    }

    renderMessageSection(){
        // Are we loading?
        if(this.props.loadingMsg){
            return (<div className="row">Loading</div>)
        }

        // Yes!
        const t = this.props.topic;
        return(
            <div>
                {this.renderMessageList()}
                <hr />
                <MessageForm topicId={t._id} />
            </div>
        )
    }

    renderTopic() {
        if(this.props.loadingTopic){
            return (<div className="row">Loading</div>)
        }

        const t = this.props.topic;
        let md = new Remarkable();
        let html = md.render(t.description);
        return (
            <div className="row">
                <div className="card large-12 medium-12 small-12 columns large-centered medium-centered">
                    <div className="content">
                        <span className="title">
                            {t.title}
                        </span>
                        <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                    </div>
                    <div className="action">
                        <a>Tag1</a>, <a>Tag2</a>, <a>Tag3</a>
                    </div>
                </div>
            </div>)
    }

    render() {
        return (
            <div className="row">
                <div className="large-8 columns">
                    {this.renderTopic()}
                    <hr />
                    {this.renderMessageSection()}
                </div>
                <div className="large-4 columns">
                    <h4>Resources</h4>
                    <a>Some link</a>, <a>Some other link</a>
                    <hr />
                    <h4>Actions</h4>
                    <ul>
                        <li><a>Edit</a></li>
                        <li><a>...</a></li>
                    </ul>
                </div>
            </div>)
    }
}

TopicView.propTypes = {
    topic : React.PropTypes.object,
    messages : React.PropTypes.array,
    loadingTopic : React.PropTypes.bool,
    loadingMsg : React.PropTypes.bool
};

TopicView.defaultProps = {};

export default Radium(TopicView)
