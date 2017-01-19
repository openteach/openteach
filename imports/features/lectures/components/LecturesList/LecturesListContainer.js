import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Lecture } from '../../../../collections/lectures/lectures.js';
import LecturesList from './LecturesList.jsx';

export default createContainer((params) => {

    const handle = Meteor.subscribe('lectures');

    const loading = !handle.ready();
    const lectures = Lecture.find({}).fetch()

    return {
        loading : loading,
        lectures : lectures
    };
}, LecturesList)
