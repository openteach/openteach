import {Book} from '../../collections/books/books.js'
import {Topic} from '../../collections/topics/topics.js'
import {TopicMessage} from '../../collections/topic-messages.js'

// Publish books
// TODO: Limit and offset
Meteor.publish('books', function() {
    return Book.find();
});

// TODO: Limit and offset
Meteor.publish('topics', function() {
    return Topic.find();
});

// TODO: Limit and offset
Meteor.publish('topic-messages', function(topicId, limit) {
    return TopicMessage.find({"topicId" : topicId});
});
