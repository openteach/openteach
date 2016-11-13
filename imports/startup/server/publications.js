import {Book} from '../../collections/books.js'

// Publish books
Meteor.publish('books', function() {
    return Book.find();
});
