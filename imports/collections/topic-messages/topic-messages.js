import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../../helpers';

const TopicMessages = new Mongo.Collection('topicMessages');

export const TopicMessage = Class.create({
    name : "TopicMessage",
    collection : TopicMessages,
    fields : {
        message : String,
        topicId : String,
        authorName: String,
        authorId : String
    },
    behaviors: {
        timestamp: {
            hasCreatedField: true,
            createdFieldName: 'createdAt',
            hasUpdatedField: true,
            updatedFieldName: 'updatedAt'
        }
    }
});


globalizeData({ TopicMessages }, { TopicMessage });
