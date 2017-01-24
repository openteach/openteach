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
            tags : [String],
            contractId : String,
        });
    },
    run({ title, description, tags, contractId }) {
        // Current usre has authered
        let authorName = Meteor.user().profile.name;

        // Create new object
        let t = new Topic({
            title : title,
            description : description,
            authorName : authorName,
            authorId : Meteor.userId(),
            contractId : contractId,
            tags : tags
        });

        // We only do this on the serverside
        if(!this.isSimulation){
            // add tags we haevn't seen before for autocompletion
            const contract = ApprContract.findOne({_id : contractId});

            newTags = uniq(contract.tags.concat(tags));

            if(newTags.length !== contract.tags.length){
                contract.tags = newTags;
                contract.save();
            }
        }

        // Save it
        t.save();
        return t;
    },
});

export const updateTopic = new ValidatedMethod({
    name: 'appr.updateTopic',
    validate(args) {
        check(args, {
            title: String,
            description : String,
            tags : [String],
            oldTopic : Topic
        });
    },
    run({ title, description, tags, oldTopic }) {

        // Create new object
        let t = Topic.findOne({_id : oldTopic._id})

        // TODO: Save history
        t.title = title;
        t.description = description;
        t.tags = tags;

        // add tags we haven't seen before for autocompletion
        const contract = ApprContract.findOne({_id : t.contractId});

        newTags = uniq(contract.tags.concat(tags));

        if(newTags.length !== contract.tags.length){
            contract.tags = newTags;
            contract.save();
        }

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
            time : String,
            place : String,
            tags : [String],
            contractId : String
        });
    },
    run({ title, agenda, time, place, tags, contractId }) {
        // Create new object
        const c = new Conversation({
            title : title,
            agenda : agenda,
            time : time,
            place : place,
            tags : tags,
            contractId : contractId
        });

        // add tags we haevn't seen before for autocompletion
        const contract = ApprContract.findOne({_id : contractId});

        newTags = uniq(contract.tags.concat(tags));

        if(newTags.length !== contract.tags.length){
            contract.tags = newTags;
            contract.save();
        }

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

// Local helpers
function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
