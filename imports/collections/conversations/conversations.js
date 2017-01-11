import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../../helpers';

const Conversations = new Mongo.Collection('conversations');

export const Conversation = Class.create({
    name: 'Conversation',
    collection: Conversations,
    fields: {
        title: String,
        agenda : String,
        contractId : String
    }
});

globalizeData({ Conversations }, { Conversation });
