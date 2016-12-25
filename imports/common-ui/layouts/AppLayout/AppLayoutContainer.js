import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AppLayout from './AppLayout.jsx';

export default createContainer((params) => {

    // Global subscriptions we want
    const userHandle = Meteor.subscribe('accounts-user');
    const instructorHandle = Meteor.subscribe('accounts-instructor-users');

    // We want to be able to see if they are ready
    const loading = !instructorHandle.ready() && !userHandle.ready();

    return {
        loading : loading
    }
}, AppLayout)
