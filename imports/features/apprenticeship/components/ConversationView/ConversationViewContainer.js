import { createContainer } from 'meteor/react-meteor-data';
import { Conversation } from '../../../../collections/conversations/conversations.js';

import ConversationView from './ConversationView.jsx';

export default createContainer((params) => {
    const { conversationId } = params;

    const handle = Meteor.subscribe('conversations-single', conversationId);
    const loading = !handle.ready();
    const conversation = Conversation.findOne({_id : conversationId});


    return {
        conversation : conversation,
        loading : loading,
    };
}, ConversationView)
