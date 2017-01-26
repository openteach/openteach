import { createContainer } from 'meteor/react-meteor-data';
import { newLecture as _newLecture } from '../../methods.js';
import LectureNewForm from './LectureNewForm.jsx';

export default createContainer((params) => {
    const newLecture = (args, callback) => _newLecture.call(args, callback);
    return {
        newLecture : newLecture
    };
}, LectureNewForm)
