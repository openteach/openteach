/*
The is the course collection.
*/
import { Mongo } from 'meteor/mongo';

export const Lectures = new Mongo.Collection('lectures');

// Schema
Lectures.schema = new SimpleSchema({
  title: {type: String},
  videofeed: {type: SimpleSchema.RegEx.Url},
  startUtc: {type: Date},
});
