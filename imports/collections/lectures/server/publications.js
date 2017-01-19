import {Lecture} from '../lectures.js'

/* Security: Has access to the related contract */

// TODO: Check authentication
// TODO: Limit and offset
Meteor.publish('lectures', function() {
    return Lecture.find();
})
