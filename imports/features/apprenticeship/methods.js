import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Topic } from '../../collections/topics/topics.js';
import { TopicMessage } from '../../collections/topic-messages/topic-messages.js';
import { ApprContract } from '../../collections/appr-contracts/appr-contracts.js';

export const newTopic = new ValidatedMethod({
    name: 'appr.newTopic',

    validate(args) {
        check(args, {
            title: String,
            description : String,
            contractId : String
        });
    },

    run({ title, description, contractId }) {
        //console.log('Executing on client?', this.isSimulation);

        // Current usre has authered
        let authorName = Meteor.user().profile.name;

        // Create new object
        let t = new Topic({
            title : title,
            description : description,
            authorName : authorName,
            contractId : contractId,
            authorId : Meteor.userId()
        });

        // Save it
        t.save();
        return t;
    },
});

export const newTopicMessage = new ValidatedMethod({
    name: 'appr.newTopicMessage',

    validate(args) {
        check(args, {
            topicId : String,
            message : String
        });
    },

    run({ topicId, message }) {
        let authorName = Meteor.user().profile.name;

        // Create new object
        let tm = new TopicMessage({
            message : message,
            topicId : topicId,
            authorName  : authorName,
            authorId : Meteor.userId()
        });

        // Save it
        tm.save();
    },
});


/******************* Conversations ****************/

export const newConversation = new ValidatedMethod({
    name: 'appr.newConversation',

    validate(args) {
        check(args, {
            title: String,
            agenda : String
        });
    },

    run({ title, description }) {
        return "Not yet implemented";
    },
});

/******************* Contract ****************/

export const newContract = new ValidatedMethod({
    name: 'appr.newContract',

    validate(args) {
        check(args, {
            contractGoals: String,
            learningStructure : String,
            formalStructure : String,
            studentId : String,
            instructorId : String,
            title : String
        });
    },

    run({ contractGoals, learningStructure, formalStructure, studentId, instructorId, title }) {

        let contract = new ApprContract({
            studentIds : [studentId],
            instructorIds : [instructorId],
            contractGoals : contractGoals,
            learningStructure : learningStructure,
            formalStructure : formalStructure,
            title: title
        });

        contract.save();
        return contract;
    },
});
