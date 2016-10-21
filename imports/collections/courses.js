/*
The is the course collection.
*/
import { Mongo } from 'meteor/mongo';

export const Courses = new Mongo.Collection('courses');


let LectureSchema = new SimpleSchema({
    meta : {
        type : Object,
        blackbox: true
    },
    content : {
        type : String
    }
});

// Schema
Courses.schema = new SimpleSchema({
    title: {type: String},
    index : {type: LectureSchema}, // Md file for index lecture 
    lectures: {type: [LectureSchema]},
});
