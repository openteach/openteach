import React, { Component } from 'react';
import Radium from 'radium';

import TopicList from '../TopicList'
import NewTopicForm from '../NewTopicForm'

class ApprDashboard extends Component {
    render() {
        console.log("wahaha")
        return (<div>
            <div className="row">
                <div className="large-8 columns">
                    <h1>[Instructor] teaching [student]</h1>
                </div>
                <div className="large-4 columns"><a>Contract</a></div>
            </div>
            <div className="row">
                <div className="large-6 columns">
                    <NewTopicForm />
                    <TopicList />
                </div>
                <div className="large-6 columns">
                    conversation list goes here.
                </div>
            </div>
        </div>);
    }
}

ApprDashboard.propTypes = {
    topicList: React.PropTypes.array,
    loading: React.PropTypes.bool,
};

ApprDashboard.defaultProps = {};

export default Radium(ApprDashboard)
