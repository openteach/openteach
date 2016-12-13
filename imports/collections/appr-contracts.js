import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

const ApprContracts = new Mongo.Collection('appr-contracts');

/*
On this we also need

* Teaching philosophy - a part of the teacher
* Student philosofy - a part of the student

*/

export const ApprContract = Class.create({
    name: 'ApprContracts',
    collection: ApprContracts,
    fields: {
        price : String, // some pricing object
        extend : String,
        goal : String
    }
});

globalizeData({ ApprContracts }, { ApprContract });
