import { createContainer } from 'meteor/react-meteor-data';
import { newTopic, updateTopic } from '../../methods.js';
import TopicEditForm from './TopicEditForm.jsx';

export default createContainer((params) => {
    const newTopicW = (args, callback) => newTopic.call(args, callback);
    const updateTopicW = (args, callback) => updateTopic.call(args, callback);

    // Alight, we have two situationer:
    //
    // 1. We edit an existing topic. This is if the topic property is set.
    // 2. We create a new topic, this is if the topic property is false or not set.

    return {
        newTopic : newTopicW,
        updateTopic : updateTopicW
    };
}, TopicEditForm)
