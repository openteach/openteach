/*
  Contains everything needed for keeping the site updated with GitHub
*/

import { Instructor } from '../collections/instructor';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import { Courses } from '../collections/courses.js';
import { Meteor } from 'meteor/meteor';

import fetchCourse from './fetch_course.js';
import fetchInstructor from './fetch_instructor.js';

var syncJob = function() {
    let instructor = fetchInstructor(Meteor.settings.instructor.ghUser, Meteor.settings.instructor.ghRepo);

    for(var i=0 ; i<instructor.courses.length ; i++){
        fetchCourse(instructor.courses[i].ghUser,
            instructor.courses[i].ghRepo,
            instructor.courses[i].base);
    }
};

// Debugging TODO: Move to tests
syncJob();

SyncedCron.add({
    name: 'Checking for course updates',
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text('every 2 hours');
    },
    job: syncJob
});
