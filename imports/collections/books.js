import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

export const Books = new Mongo.Collection('books');

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
        index: Chapter,
        chapters : [Chapter]
    },
});

globalizeData({ Books }, { Book });
