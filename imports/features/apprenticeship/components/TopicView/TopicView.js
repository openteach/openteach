import React, { Component } from 'react';
import Radium from 'radium';

class TopicView extends Component {
    render() {
        const t = this.props.topic;
        return (<div>
            <div className="row">
                <div className="large-12 columns">{t.title}</div>
            </div>
            <div className="row">
                <div className="large-12 columns">{t.description}</div>
            </div>
        </div>)
    }
}

TopicView.propTypes = {
    topic : React.PropTypes.object
};

TopicView.defaultProps = {};

export default Radium(TopicView)
