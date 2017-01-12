import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import Radium from 'radium';

class TopicCard extends Component {

    render() {
        let topic = this.props.topic;
        let md = new Remarkable();
        md.use(Meta);
        let html = md.render(topic.description);
        return (
            <div className="large-12 medium-12 small-12 columns">
                <div className="card" style={style.notification(topic.readBy.indexOf(Meteor.userId()) >= 0)}>
                    <div className="content">
                        <span className="title">{topic.title}</span>
                        <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                    </div>
                    <div className="action">
                        <a href={FlowRouter.path("topicRoute", {"id" : topic._id})}>Open</a>
                    </div>
                </div>
            </div>);
    }
}

const style = {
    notification : function(isSeen){
            if(isSeen)
                return {}
            else
                return {"background" : "#fffece"}
    }
}

TopicCard.propTypes = {
    topic : React.PropTypes.object
};

TopicCard.defaultProps = {};

export default Radium(TopicCard)
