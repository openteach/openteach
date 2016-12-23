import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../../helpers';

const TopicMessages = new Mongo.Collection('topic-messages');

export const TopicMessage = Class.create({
    name : "TopicMessage",
    collection : TopicMessages,
    fields : {
        message : String,
        topicId : String,
        authorName: String,
        authorId : String,
        hasAccessIds : [String]
    }
});


globalizeData({ TopicMessages }, { TopicMessage });
