import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ConversationCard from './ConversationCard.jsx';

export default createContainer((params) => {
    return {}
}, ConversationCard)
