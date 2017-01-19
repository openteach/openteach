import {Topic} from '../topics.js'

/* Security: Has access to the related contract */

// TODO: Check authentication
// TODO: Limit and offset
Meteor.publish('topics-contract', function(contractId) {
    return Topic.find({
        contractId : contractId
    },
    {
        sort : {
            createdAt : -1
        }
    });
})

// TODO: Check authentication
// TODO: Limit and offset
Meteor.publish('topics-single', function(topicId) {
    return Topic.find({
        _id : topicId
    });
})
