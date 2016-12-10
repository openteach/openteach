import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Book as BookClass } from '../../../../collections/books.js';
import Book from './Book.js';

export default createContainer((params) => {

    const { id, currentChapter } = params;
    const booksHandle = Meteor.subscribe('books');

    const loading = !booksHandle.ready();
    const book = BookClass.findOne({ urlTitle : id});

    console.log(currentChapter);

    return {
        loading : loading,
        book: book,
        chapters : typeof book === 'undefined' ? [] : book.chapters,
        currentChapter : currentChapter
    }
}, Book)
