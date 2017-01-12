import React, { Component } from 'react';
import Radium from 'radium';
//import TopicCard from '../TopicCard';

class LecturesList extends Component {
    renderTopics() {
        let lectures = this.props.lectures;
        return lectures.map((t) => (<div key={t._id} topic={t} />));
    }
    render() {
        if(this.props.loading)
            return (<div>Loading</div>)
        return (
            <div  className="row">
                {this.renderTopics()}
            </div>)
    }
}

LecturesList.propTypes = {
    lectures : React.PropTypes.array,
    loading: React.PropTypes.bool
};

LecturesList.defaultProps = {};

export default Radium(LecturesList)
