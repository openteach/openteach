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
    console.log(book.chapters);

    return {
        book: book,
        chapters : book.chapters,
        currentChapter : currentChapter
    }
}, Book)
