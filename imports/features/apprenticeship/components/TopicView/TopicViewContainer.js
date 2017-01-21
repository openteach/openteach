import { createContainer } from 'meteor/react-meteor-data';
import { ApprContract } from '../../../../collections/appr-contracts/appr-contracts.js';
import { Topic } from '../../../../collections/topics/topics.js';
import {TopicMessage} from '../../../../collections/topic-messages/topic-messages.js';
import TopicView from './TopicView.jsx';
import { markTopicSeen as _markTopicSeen } from '../../methods.js';

export default createContainer((params) => {
    const markTopicSeen = (args, callback) => _markTopicSeen.call(args, callback);
    const { topicId } = params;

    const handle = Meteor.subscribe('topics-single', topicId);
    const loading = !handle.ready();
    const topic = Topic.findOne({_id : topicId});

    if(topic){
        Session.set("appr-current-contract", topic.contractId)
    }

    const contractSub = Meteor.subscribe('appr-contract');
    const contractInView = ApprContract.findOne({ "_id" : Session.get("appr-current-contract") });
    const contractLoading = !contractSub.ready();

    const handleMsg = Meteor.subscribe('topic-messages', topicId);
    const loadingMsg = !handleMsg.ready();
    const topicMsgs = TopicMessage.find({topicId : topicId}).fetch();

    if(topic && !loading){
        markTopicSeen({topicId : topic._id});
    }

    return {
        contract : contractInView,
        topic : topic,
        messages : topicMsgs,
        loadingTopic : (loading || contractLoading),
        loadingMsg : loadingMsg
    };
}, TopicView)
