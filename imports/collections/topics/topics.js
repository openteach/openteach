import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../../helpers';

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

export const Topic = Class.create({
    name: 'Topic',
    collection: Topics,
    fields: {
        contractId : String, // Id of associated contract
        title: {
            type: String,
            validators : [
                {
                    type: 'minLength',
                    param: 1,
                    message: 'Title can not be empty.'
                }
            ]
        },
        description : {
            type: String,
            validators : [
                {
                    type: 'minLength',
                    param: 1,
                    message: 'Description can not be empty.'
                }
            ]
        },
        authorName : String,
        authorId : String
        //resources : [Resource],
        //tags : [Tag],
    }
});

globalizeData({ Topics }, { Topic });
