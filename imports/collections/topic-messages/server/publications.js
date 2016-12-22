import {TopicMessage} from '../topic-messages.js'

// TODO: Limit and offset
Meteor.publish('topic-messages', function(topicId, limit) {
    return TopicMessage.find({"topicId" : topicId});
});
