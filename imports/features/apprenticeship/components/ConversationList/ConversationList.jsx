import React, { Component } from 'react';
import Radium from 'radium';
import ConversationCard from '../ConversationCard';

class ConversationList extends Component {
    renderConversations() {
        let conversations = this.props.conversations;
        return conversations.map((t, i) => (<ConversationCard key={i} conversation={t} />));
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
