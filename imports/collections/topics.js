import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

const Topics = new Mongo.Collection('topics');
Topics.allow({
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
    },
    secured: {
        update: false,
        insert: false
    }
});

globalizeData({ Topics }, { Topic });
