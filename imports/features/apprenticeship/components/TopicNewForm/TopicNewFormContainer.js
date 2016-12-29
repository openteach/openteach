import { createContainer } from 'meteor/react-meteor-data';
import { newTopic as _newTopic } from '../../methods.js';
import TopicNewForm from './TopicNewForm.jsx';

export default createContainer((params) => {
    const newTopic = (args, callback) => _newTopic.call(args, callback);

    return {
        newTopic : newTopic
    };
}, TopicNewForm)
