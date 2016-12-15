/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import TopicView from './TopicView.jsx';
import TopicViewContainer from './TopicViewContainer.js';

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('TopicView Component Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can render', () => {
                var component = TestUtils.renderIntoDocument(<TopicView loadingMsg={true} loadingTopic={true} topic={{}} messages={[]} />);
            });

            it('Can run container', () => {
                var component = TestUtils.renderIntoDocument(<TopicViewContainer topicId="123" />);
            });
        });
    }

    if (Meteor.isServer) {
        describe('Server Tests', () => {
            it('Can have empty test', () => {
            });
        });
    }

    describe('General Tests', () => {
        it('Can have empty test', () => {
        });
    });
});
