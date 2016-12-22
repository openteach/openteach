import React, { Component } from 'react';
import Radium from 'radium';
import MessageForm from '../MessageForm';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';

class TopicView extends Component {

    renderMessageList() {
        let messages = this.props.messages;
        return messages.map((m) => (
        <div className="row">
            <div className="card large-8 medium-10 small-12 columns large-centered medium-centered">
                <div className="content">
                    <span className="title">{m.author}</span>
                    <p>{m.message}</p>
                </div>
                <div className="action">
                    <a>tag?</a>
                </div>
            </div>
        </div>));


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
        md.use(Meta);
        let html = md.render(t.description);
        return (
            <div className="row">
                <div className="card large-8 medium-10 small-12 columns large-centered medium-centered">
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
            <div>
                {this.renderTopic()}
                <hr />
                {this.renderMessageSection()}
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
