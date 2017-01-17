import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Radium from 'radium';

class ConversationCard extends Component {

    render() {
        const conversation = this.props.conversation;
        const md = new Remarkable();
        const html = md.render(conversation.agenda);
        const tags = conversation.tags.map((t, i) => (<a key={i}>{t}</a>))
        return (
            <div className="large-12 medium-12 small-12 columns">
                <div className="card">
                    <div className="content">
                        <span className="title">{conversation.title}</span>
                        <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                    </div>
                    <div className="action">
                        <a href={FlowRouter.path("conversationRoute", {"id" : conversation._id})}>Open</a>
                         - {tags}
                    </div>
                </div>
            </div>);
    }
}


ConversationCard.propTypes = {
    conversation : React.PropTypes.object
};

ConversationCard.defaultProps = {};

export default Radium(ConversationCard)
