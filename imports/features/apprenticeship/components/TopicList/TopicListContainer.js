import { createContainer } from 'meteor/react-meteor-data';
import { Topic } from '../../../../collections/topics.js';

import TopicList from './TopicList.js';
export default createContainer((params) => {

    const handle = Meteor.subscribe('books');

    const loading = !handle.ready();
    const topics = Topic.find({}).fetch()

    return {
        loading : loading,
        topics : topics
    };
}, TopicList)
