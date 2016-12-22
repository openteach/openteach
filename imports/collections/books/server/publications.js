import {Book} from '../books.js'

// Publish books
// TODO: Limit and offset
Meteor.publish('books', function() {
    return Book.find();
});
