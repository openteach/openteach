import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import ApprDashboard from './ApprDashboard.js';
import { ApprContract } from '../../../../collections/appr-contracts/appr-contracts.js';

export default createContainer((_) => {

    let user = {
        name : "Loading ..."
    }
    let instructor = {
        name : "Loading ..."
    }


    // Subscriptions
    const contractSub = Meteor.subscribe('appr-contract');
    if(!contractSub.ready()){
        return {
            instructor : instructor,
            student    : user,
            loading    : true
        }
    }

    // Find the contract
    const contractInView = ApprContract.findOne({ "_id" : Session.get("appr-current-contract") });

    // Find the student, so far we pic the first student from the list. this
    // it to support multiple students later
    const userInView = Meteor.users.findOne({ _id : contractInView.studentIds[0] });
    if(typeof userInView !== 'undefined')
        user = userInView.profile;

    // Find instructor, so far we pic the first instructor from the list. this
    // it to support multiple instructors later
    let instructorInView = Meteor.users.findOne({ _id : contractInView.instructorIds[0] });
    if(typeof instructorInView !== 'undefined')
        instructor = instructorInView.profile;

    return {
        instructor : instructor,
        student    : user,
        contract : contractInView,
        loading : false
    };
}, ApprDashboard)
