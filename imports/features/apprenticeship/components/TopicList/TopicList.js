import React, { Component } from 'react';
import Radium from 'radium';
import TopicCard from '../TopicCard';

class TopicList extends Component {
    renderTopics() {
        let topics = this.props.topics;
        return topics.map((t) => (<TopicCard key={t._id} topic={t} />));
    }
    render() {
        return (
            <div  className="row">
                {this.renderTopics()}
            </div>)
    }
}

TopicList.propTypes = {
    topics : React.PropTypes.array,
    loading: React.PropTypes.bool
};

TopicList.defaultProps = {};

export default Radium(TopicList)
