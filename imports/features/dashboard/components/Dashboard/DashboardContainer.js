import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Dashboard from './Dashboard.js';

export default createContainer((params) => {
    const { children , selected } = params

    return {
        children: children,
        selected : selected
    }
}, Dashboard)
