/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import TopicEditForm from './TopicEditForm.jsx';
import TopicEditFormContainer from './TopicEditFormContainer.js'

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('TopicEditForm Component Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can render', () => {
                var component = TestUtils.renderIntoDocument(<TopicEditForm contract={{tags : []}} />);
            });

            it('Can run container', () => {
                var component = TestUtils.renderIntoDocument(<TopicEditFormContainer topicId="123" contract={{tags : []}} />);
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
