import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import ApprDashboard from './ApprDashboard.js';
export default createContainer((params) => {

    let user = {
        name : "Loading ..."
    }
    let instructor = {
        name : "Loading ..."
    }

    // Are we an instructor?
    let isInstructor = Roles.userIsInRole(Meteor.user(), ['instructor'], 'openteach');

    if(isInstructor){ // We are an instructor
        const userInView = Meteor.users.findOne({ "_id" : Session.get("appr-current-student") });
        if(typeof userInView !== 'undefined')
            user = userInView.profile;
    } else if(Meteor.user()){ // We are a user
        user = Meteor.user().profile;
    }

    // Find instructor
    let instructorInView = Meteor.users.findOne({ isInstructor : true });
    if(typeof instructorInView !== 'undefined')
        instructor = instructorInView.profile;


    return {
        instructor : instructor,
        student    : user
    };
}, ApprDashboard)
