import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import ApprDashboard from './ApprDashboard.js';
export default createContainer((params) => {

    let user = {
        name : "Loading ..."
    }
    if(Meteor.user()){
        console.log(Meteor.user())
        user = Meteor.user().profile;
    }

    return {
        instructor : {
            name : Meteor.settings.public.instructorName
        },
        student : user
    };
}, ApprDashboard)
