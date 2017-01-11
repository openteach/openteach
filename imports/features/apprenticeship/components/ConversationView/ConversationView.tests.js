/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import ConversationView from './ConversationView.jsx';
import ConversationViewContainer from './ConversationViewContainer.js';

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('ConversationView Component Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can render', () => {
                var component = TestUtils.renderIntoDocument(<ConversationView loading={true} conversation={{}} />);
            });

            it('Can run container', () => {
                var component = TestUtils.renderIntoDocument(<ConversationViewContainer topicId="123" />);
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
