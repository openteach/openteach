import React, { Component } from 'react';
import Radium from 'radium';
import MessageForm from '../MessageForm';

class TopicView extends Component {

    renderMessages() {
        let messages = this.props.messages;
        return messages.map((m) => (
        <div key={m._id}>
            <h4>{m.author}</h4>
            <p>{m.message}</p>
            <hr />
        </div>));
    }

    render() {
        const t = this.props.topic;
        return (
        <div>
            <div className="row">
                <div className="card large-8 medium-10 small-12 columns large-centered medium-centered">
                    <div className="content">
                        <span className="title">{t.title}</span>
                        <p>{t.description}</p>
                    </div>
                    <div className="action">
                        <a>Tag1</a>, <a>Tag2</a>, <a>Tag3</a>
                    </div>
                </div>
            </div>
            <div className="row">
                {this.renderMessages()}
            </div>
            <div className="row">
                <MessageForm topicId={t._id} />
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
