import { createContainer } from 'meteor/react-meteor-data';
import { newConversation as _newConversation } from '../../methods.js';
import ConversationNewForm from './ConversationNewForm.jsx';

export default createContainer((params) => {
    const newConversation = (args, callback) => _newConversation.call(args, callback);

    return {
        newConversation : newConversation
    };
}, ConversationNewForm)
