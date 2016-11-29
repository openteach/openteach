import {Book} from '../../collections/books.js'
import {Topic} from '../../collections/topics.js'
import {TopicMessage} from '../../collections/topic-messages.js'

// Publish books
Meteor.publish('books', function() {
    return Book.find();
});

Meteor.publish('topics', function() {
    return Topic.find();
})

Meteor.publish('topic-messages', function() {
    return TopicMessage.find();
});
