import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../../helpers';

const Lectures = new Mongo.Collection('lectures');

export const Lecture = Class.create({
    name: 'Lecture',
    collection: Lectures,
    fields: {
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
        videoFeed : {
            type : String,
            optional: true,
            default: ""
        },
        tags : {
            type : [String],
            default : []
        },
        authorName : String,
        authorId : String,
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

globalizeData({ Lectures }, { Lecture });
