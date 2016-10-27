import {Books} from '../../collections/books.js'

// Publish books
Meteor.publish('books', function() {
    return Books.find();
});
