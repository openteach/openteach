import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Book } from '../../../../collections/books/books.js';
import ListBooks from './ListBooks.js';

export default createContainer((params) => {
    const { id } = params;
    const booksHandle = Meteor.subscribe('books');

    const loading = !booksHandle.ready();
    const books = Book.find({}).fetch()

    return {
        bookList : books,
        loading : loading
    }
}, ListBooks)
