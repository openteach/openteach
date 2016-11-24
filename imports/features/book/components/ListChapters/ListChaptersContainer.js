import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ListChapters from './ListChapters.js';

export default createContainer((params) => {
    const { chapters } = params;

    return {
        chapters : chapters
    }
}, ListChapters)
