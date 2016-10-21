import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import {fetchInstructor, fetchCourse} from './integrations/github.js';

export const importRepoData = function() {
    let instructor = fetchInstructor(Meteor.settings.instructor.ghUser, Meteor.settings.instructor.ghRepo);

    for(var i=0 ; i<instructor.courses.length ; i++){
        fetchCourse(instructor.courses[i].ghUser,
            instructor.courses[i].ghRepo,
            instructor.courses[i].base);
    }
};