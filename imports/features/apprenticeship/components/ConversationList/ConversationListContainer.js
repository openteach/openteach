import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Conversation } from '../../../../collections/conversations/conversations.js';
import ConversationList from './ConversationList.jsx';

export default createContainer(({contract}) => {

    const handle = Meteor.subscribe('topics-contract', contract._id);

    const loading = !handle.ready();
    const conversations = Conversation.find({contractId : contract._id}).fetch()

    return {
        loading : loading,
        conversations : conversations
    };
}, ConversationList)
