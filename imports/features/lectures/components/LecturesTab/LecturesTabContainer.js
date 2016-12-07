import { createContainer } from 'meteor/react-meteor-data';

import LecturesTab from './LecturesTab.js';
export default createContainer((params) => {
    const { children } = params;
    return {
        children: children
    }
}, LecturesTab)
