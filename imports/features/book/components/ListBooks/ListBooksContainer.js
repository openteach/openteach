import { createContainer } from 'meteor/react-meteor-data';
import ListBooks from './ListBooks.js';
import { Meteor } from 'meteor/meteor';

import { Books } from '../../../../collections/books.js';

export default createContainer((params) => {
    const { id } = params;
    const booksHandle = Meteor.subscribe('books');

    const loading = !booksHandle.ready();
    const books = Books.find({}).fetch()

    return {
        bookList : books,
        loading : loading
    }
}, ListBooks)
