import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Topic } from '../../collections/topics/topics.js';
import {TopicMessage} from '../../collections/topic-messages/topic-messages.js';

export const newTopic = new ValidatedMethod({
    name: 'appr.newTopic',

    validate(args) {
        check(args, {
            title: String,
            description : String
        });
    },

    run({ title, description }) {
        //console.log('Executing on client?', this.isSimulation);

        // We assume that all published users are to have access to this
        // document. This include currently logged in user
        // TODO: This is not a good idea: In particular, when an instructor
        // switched between two users both users might be in the collection.
        const users = Meteor.users.find().fetch();
        const userIds = users.map((u) => u._id);

        // Find all relevant students
        let authorName = Meteor.user().profile.name;

        // Create new object
        let t = new Topic({
            title : title,
            description : description,
            authorName : authorName,
            authorId : Meteor.userId(),
            hasAccessIds : userIds // TODO, add relevant instructor/student
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
            authorId : Meteor.userId(),
            hasAccessIds : [Meteor.userId()]
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
