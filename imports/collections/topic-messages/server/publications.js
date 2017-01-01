import {TopicMessage} from '../topic-messages.js'

/* Security: Has access to the related Topic */

// TODO: Check authentication
// TODO: Limit and offset
Meteor.publish('topic-messages', function(topicId, limit) {
    return TopicMessage.find({"topicId" : topicId});
});
