import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../../helpers';

const TopicMessages = new Mongo.Collection('topic-messages');
TopicMessages.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});

export const TopicMessage = Class.create({
    name : "TopicMessage",
    collection : TopicMessages,
    fields : {
        message : String,
        topicId : String,
        author: String
    },
    secured: {
        update: false,
        insert: false
    }
});


globalizeData({ TopicMessages }, { TopicMessage });
