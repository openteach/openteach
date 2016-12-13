import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import TopicCard from './TopicCard.js';

export default createContainer((params) => {

    const { topic } = params;

    return {
        topic: topic,
    }
}, TopicCard)
