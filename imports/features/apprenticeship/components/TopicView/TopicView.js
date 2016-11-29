import React, { Component } from 'react';
import Radium from 'radium';
import MessageForm from '../MessageForm';

class TopicView extends Component {
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
                <MessageForm />
            </div>
        </div>)
    }
}

TopicView.propTypes = {
    topic : React.PropTypes.object
};

TopicView.defaultProps = {};

export default Radium(TopicView)
