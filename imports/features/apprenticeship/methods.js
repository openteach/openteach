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
        // Create new object
        let t = new Topic({
            title : title,
            description : description,
            authorId : Meteor.userId(),
            hasAccessIds : [Meteor.userId()]
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
        const authorName = Meteor.user().profile.name;

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
