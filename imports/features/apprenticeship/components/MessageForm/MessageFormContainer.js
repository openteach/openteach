import { createContainer } from 'meteor/react-meteor-data';
import { newTopicMessage as _newTopicMessage } from '../../methods.js';


import MessageForm from './MessageForm.jsx';
export default createContainer((params) => {
    const newTopicMessage = (args, callback) => _newTopicMessage.call(args, callback);
    return {
        newTopicMessage : newTopicMessage
    };
}, MessageForm)
