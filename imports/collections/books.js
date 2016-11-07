import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

export const Books = new Mongo.Collection('books');

export const convertToUrlStr = function(str)
{
    return str
        .toLowerCase()
        .replace(/[^\w ]+/g,' ')
        .replace(/ +/g,'-');
}

export const Chapter = Class.create({
  name: 'Chapter',
  /* No collection attribute */
  fields: {
    meta: {
      type: Object
    },
    content: {
      type: String
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
            /* Do something before saving document */
            e.currentTarget.urlTitle = convertToUrlStr(e.currentTarget.title);
        }
    }
});

globalizeData({ Books }, { Book });
