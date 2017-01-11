import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import Radium from 'radium';

class ConversationCard extends Component {

    render() {
        let conversation = this.props.conversation;
        let md = new Remarkable();
        md.use(Meta);
        let html = md.render(conversation.agenda);
        return (
            <div className="large-12 medium-12 small-12 columns">
                <div className="card">
                    <div className="content">
                        <span className="title">{conversation.title}</span>
                        <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                    </div>
                    <div className="action">
                        <a href={FlowRouter.path("conversationRoute", {"id" : conversation._id})}>Open</a>
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
