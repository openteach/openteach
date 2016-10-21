import React from 'react';
import { Courses } from '../../../imports/collections/courses.js';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import { createContainer } from 'meteor/react-meteor-data';

import Material from '../../../imports/features/material/components/Material/';

export default class Course extends React.Component {

    render() {
        return(
            <Material courseId={this.props.courseId} lectureId={this.props.lectureId}  />
        )
    }
}
