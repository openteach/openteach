import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

const Topics = new Mongo.Collection('topics');

const Resource = Class.create({

});

const Tag = Class.create({

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
        description : String,
        resources : [Resource],
        tags : [Tag],
        messages : [Message]
    },
    events: {
        beforeSave(e) {
            // update url field to match title
            e.currentTarget.urlTitle = convertToUrlStr(e.currentTarget.title);
        }
    }
});

globalizeData({ Books }, { Book });
