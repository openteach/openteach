import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import OverlayMenu from './OverlayMenu.jsx';

export default createContainer((params) => {

    let loggedInUser = Meteor.user()

    let isInstructor = Roles.userIsInRole(loggedInUser,['instructor'], 'openteach');

    return {
        isInstructor : isInstructor,
        isStudent: true
    }
}, OverlayMenu)
