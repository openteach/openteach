import { createContainer } from 'meteor/react-meteor-data';
import { Topic } from '../../../../collections/topics.js';
import TopicView from './TopicView.js';

export default createContainer((params) => {
    const { topicId } = params;

    const handle = Meteor.subscribe('topics');

    const loading = !handle.ready();
    const topic = Topic.findOne({_id : topicId});

    return {
        topic : topic,
        loading : loading
    };
}, TopicView)
