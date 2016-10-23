/*
The is the course collection.
*/
import { Mongo } from 'meteor/mongo';

export const Books = new Mongo.Collection('books');


let ChapterSchema = new SimpleSchema({
    meta : {
        type : Object,
        blackbox: true
    },
    content : {
        type : String
    }
});

// Schema
Books.schema = new SimpleSchema({
    title: {type: String},
    index : {type: ChapterSchema}, // Md file for index lecture
    chapters: {type: [ChapterSchema]},
});
