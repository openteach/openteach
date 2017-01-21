import { createContainer } from 'meteor/react-meteor-data';
import { newTopic as _newTopic, updateTopic as _updateTopic } from '../../methods.js';
import TopicEditForm from './TopicEditForm.jsx';

export default createContainer(({topic}) => {
    const newTopic = (args, callback) => _newTopic.call(args, callback);
    const updateTopic = (args, callback) => _updateTopic.call(args, callback);

    // Alight, we have two situationer:
    //
    // 1. We edit an existing topic. This is if the topic property is set.
    // 2. We create a new topic, this is if the topic property is false or not set.

    return {
        newTopic : newTopic,
        updateTopic : updateTopic,
        topic : topic
    };
}, TopicEditForm)
