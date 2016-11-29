import React, { Component } from 'react';
import Radium from 'radium';
import MessageForm from '../MessageForm';

class TopicView extends Component {

    renderMessages() {
        let messages = this.props.messages;
        return messages.map((m) => (<div key={m._id}> {m.message} </div>));
    }

    render() {
        const t = this.props.topic;
        return (<div>
            <div className="row">
                <div className="large-12 columns"><h1>{t.title}</h1></div>
            </div>
            <div className="row">
                <div className="large-12 columns">{t.description}</div>
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
