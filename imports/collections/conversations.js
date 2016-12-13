import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

const Conversations = new Mongo.Collection('conversations');
Conversations.allow({
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

export const Conversation = Class.create({
    name: 'Conversation',
    collection: Conversations,
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

globalizeData({ Conversations }, { Conversation });
