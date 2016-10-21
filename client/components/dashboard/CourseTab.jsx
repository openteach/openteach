import React from 'react';
import ListCourses from './ListCourses.jsx';

export default class CourseTab extends React.Component {
    componentDidMount() {
        FlowRouter.go("dashboardRoute", {show : 1});
    }
    render() {
        return (
            <div className="dashboard">

                <ListCourses/>

            </div>
        )
    }
}
