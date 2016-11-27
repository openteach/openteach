import {Book} from '../../collections/books.js'
import {Topic} from '../../collections/topics.js'

// Publish books
Meteor.publish('books', function() {
    return Book.find();
});

Meteor.publish('topics', function() {
    return Topics.find();
})
