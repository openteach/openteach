import React, { Component } from 'react';
import Radium from 'radium';

import TopicList from '../TopicList'
import TopicNewForm from '../TopicNewForm'

class ApprDashboard extends Component {
    render() {
        const instructorName = this.props.instructor.name;
        const studentName = this.props.student.name;
        return (<div>
            <div className="row">
                <div className="large-8 columns">
                    <h1>{instructorName} teaching {studentName}</h1>
                </div>
                <div className="large-4 columns"><a>Contract</a></div>
            </div>
            <div className="row">
                <div className="large-6 columns">
                    <TopicNewForm />
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
    instructor: React.PropTypes.object,
    student: React.PropTypes.object,
};

ApprDashboard.defaultProps = {};

export default Radium(ApprDashboard)
