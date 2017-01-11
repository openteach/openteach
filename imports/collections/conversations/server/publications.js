import {Conversation} from '../conversations.js'

/* Security: Has access to the related contract */

// TODO: Check authentication
// TODO: Limit and offset
Meteor.publish('conversations-contract', function(contractId) {
    return Conversation.find({
        contractId : contractId
    });
})

// TODO: Check authentication
// TODO: Limit and offset
Meteor.publish('conversations-single', function(conversationId) {
    return Conversation.find({
        _id : conversationId
    });
})
