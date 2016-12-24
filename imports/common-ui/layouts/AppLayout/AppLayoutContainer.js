import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AppLayout from './AppLayout.jsx';

export default createContainer((params) => {

    const instructorHandle = Meteor.subscribe('accounts-user');
    const loading = !instructorHandle.ready();

    return {
        loading : loading
    }
}, AppLayout)
