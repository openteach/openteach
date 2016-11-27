import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

const Topics = new Mongo.Collection('topics');

const Resource = Class.create({
    name : "Resource",
    fields : {
        url : String
    }
});

const Tag = Class.create({
    name : "Tag",
    fields : {
        title : String
    }
});

const Message = Class.create({
    name : "Message",
    fields : {
        message : String,
        author : String
    }
});

export const Topic = Class.create({
    name: 'Topic',
    collection: Topics,
    fields: {
        title: String,
        description : String

        //resources : [Resource],
        //tags : [Tag],
        //messages : [Message]
    }
});

globalizeData({ Topics }, { Topic });
