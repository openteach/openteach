import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Book as BookClass } from '../../../../collections/books.js';
import BookTab from './BookTab.js';

export default createContainer((params) => {
    const { children } = params;

    return {
        children: children
    }
}, BookTab)
