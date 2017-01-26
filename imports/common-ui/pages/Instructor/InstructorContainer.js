import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Lecture } from '../../../collections/lectures/lectures.js';

import Instructor from './Instructor.jsx';

export default createContainer((params) => {

    const lectureSub = Meteor.subscribe('lectures');

    const loading = !lectureSub.ready();
    const users = Meteor.users.find().fetch();
    const lectures = Lecture.find().fetch();

    return {
        isInstructor : true,
        lectures : lectures,
        loading : loading,
        users: users,
    }
}, Instructor)
