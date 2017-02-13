import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import BookCard from './BookCard.jsx';

export default createContainer((params) => {

    const { book } = params;

    return {
        book: book,
    }
}, BookCard)
