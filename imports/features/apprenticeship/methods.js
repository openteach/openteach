import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Topic } from '../../collections/topics/topics.js';
import { TopicMessage } from '../../collections/topic-messages/topic-messages.js';

import { Conversation } from '../../collections/conversations/conversations.js';

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

export const markTopicSeen = new ValidatedMethod({
    name: 'appr.markTopicSeen',

    validate(args) {
        check(args, {
            topicId: String,
        });
    },

    run({ topicId }) {
        // Current usre has authered
        let userId = Meteor.userId();

        // Find topic
        let t = Topic.findOne({_id : topicId });

        // Is he already in?
        if(!(t.readBy.indexOf(userId) < 0))
            return;

        t.readBy.push(userId)
        t.save();
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
        let userId = Meteor.userId();

        // Find topic
        let t = Topic.findOne({_id : topicId });

        // Create new object
        let tm = new TopicMessage({
            message : message,
            topicId : topicId,
            authorName  : authorName,
            authorId : Meteor.userId()
        });
        t.readBy = [];

        // Save it
        t.save();
        tm.save();
        return tm;
    },
});


/******************* Conversations ****************/

export const newConversation = new ValidatedMethod({
    name: 'appr.newConversation',

    validate(args) {
        check(args, {
            title: String,
            agenda : String,
            contractId : String
        });
    },

    run({ title, agenda, contractId }) {
        // Create new object
        let c = new Conversation({
            title : title,
            agenda : agenda,
            contractId : contractId
        });

        // Save it
        c.save();
        return c;
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
