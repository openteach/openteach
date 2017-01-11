import React, { Component } from 'react';
import Radium from 'radium';
import TopicCard from '../TopicCard';

class ConversationList extends Component {
    renderConversations() {
        let conversations = this.props.conversations;
        return conversations.map((t) => (<TopicCard key={t._id} topic={t} />));
    }
    render() {
        return (
            <div  className="row">
                {this.renderConversations()}
            </div>)
    }
}

ConversationList.propTypes = {
    conversations : React.PropTypes.array,
    loading: React.PropTypes.bool
};

ConversationList.defaultProps = {};

export default Radium(ConversationList)
