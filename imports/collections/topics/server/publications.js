import {Topic} from '../topics.js'

// TODO: Limit and offset
Meteor.publish('topics', function() {
    return Topic.find({
        hasAccessIds : {"$in" : [this.userId]}
    });
})
