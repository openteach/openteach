/*
The is the apprentice collection.
*/

import { Mongo } from 'meteor/mongo';

export const Apprentices = new Mongo.Collection('courses');

let resource = new SimpleSchema({
    url : {type: SimpleSchema.RegEx.Url},
    description : String
});

let topic = new SimpleSchema({
    resources : {type : [resource]}
});


let student = new SimpleSchema({}) // Factor to be a mongo user

// Schema
Apprentices.schema = new SimpleSchema({
  students: [student],
});
