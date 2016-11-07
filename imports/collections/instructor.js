import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

export const Instructors = new Mongo.Collection('instructors');

export const Instructor = Class.create({
    name: 'Instructor',
    collection: Instructors,
    fields: {
        name: String
    },
});

globalizeData({ Instructors }, { Instructor });
