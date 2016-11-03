import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Books as BookCol } from '../../../../collections/books.js';
import Book from './Book.js';

export default createContainer((params) => {

    const { id, chapterId } = params;
    const booksHandle = Meteor.subscribe('books');

    const loading = !booksHandle.ready();
    const book = BookCol.findOne({ _id : id});

    return {
        book: book,
        chapters : book.chapters,
        chapterIdx : parseInt(chapterId)
    }
}, Book)
