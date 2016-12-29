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
        studentId : String, // As for now, only one student for one instructor
        instrucotId : String,
        contractGoals : String, // some pricing object
        learningStructure : String,
        formalStructure : String
    }
});

globalizeData({ ApprContracts }, { ApprContract });
