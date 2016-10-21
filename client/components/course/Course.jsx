import React from 'react';
import { Courses } from '../../../imports/collections/courses.js';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import { createContainer } from 'meteor/react-meteor-data';

import MaterialList from '../../../imports/features/book/components/Book/';

export default class Course extends React.Component {

    render() {
        return(
            <Book courseId={this.props.courseId} lectureId={this.props.lectureId}  />
        )
    }
}
