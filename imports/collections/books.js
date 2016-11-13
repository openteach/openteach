import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

const Books = new Mongo.Collection('books');

export const convertToUrlStr = function(str)
{
    if(typeof str !== "string")
        throw "String has to be supplied"
    return str
        .toLowerCase()
        .replace(/[^\w ]+/g,' ')
        .replace(/ +/g,'-');
}

export const Chapter = Class.create({
    name: 'Chapter',
    /* No collection attribute */
    fields: {
        meta: Object,
        content: String,
        urlTitle : String,
    },
    events: {
        beforeSave(e) {
            // update url field to match title
            const doc = e.currentTarget;
            doc.urlTitle = convertToUrlStr(doc.meta.title);
        }
    }
});

export const Book = Class.create({
    name: 'Book',
    collection: Books,
    fields: {
        title: String,
        urlTitle : String,
        index: Chapter,
        chapters : [Chapter]
    },
    events: {
        beforeSave(e) {
            // update url field to match title
            e.currentTarget.urlTitle = convertToUrlStr(e.currentTarget.title);
        }
    }
});

globalizeData({ Books }, { Book });
