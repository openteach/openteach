import { createContainer } from 'meteor/react-meteor-data';
import { Topic } from '../../../../collections/topics.js';
import {TopicMessage} from '../../../../collections/topic-messages.js';
import TopicView from './TopicView.jsx';

export default createContainer((params) => {
    const { topicId } = params;

    const handle = Meteor.subscribe('topics');
    const loading = !handle.ready();
    const topic = Topic.findOne({_id : topicId});

    const handleMsg = Meteor.subscribe('topic-messages', topicId);
    const loadingMsg = !handleMsg.ready();
    const topicMsgs = TopicMessage.find({topicId : topicId}).fetch();

    return {
        topic : topic,
        loadingTopic : loading,
        messages : topicMsgs,
        loadingMsg : loadingMsg
    };
}, TopicView)
