import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ApprenticeshipTab from './ApprenticeshipTab.js';

export default createContainer((params) => {
    const { children } = params;

    return {
        children: children
    }
}, ApprenticeshipTab)
