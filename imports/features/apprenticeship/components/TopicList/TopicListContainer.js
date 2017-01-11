import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Topic } from '../../../../collections/topics/topics.js';
import TopicList from './TopicList.jsx';

export default createContainer(({contract}) => {

    const handle = Meteor.subscribe('topics-contract', contract._id);

    const loading = !handle.ready();
    const topics = Topic.find({contractId : contract._id}).fetch()

    return {
        loading : loading,
        topics : topics
    };
}, TopicList)
