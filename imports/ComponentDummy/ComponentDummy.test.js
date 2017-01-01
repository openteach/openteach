/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import ComponentDummy from './ComponentDummy.jsx';
import ComponentDummyContainer from './ComponentDummyContainer.js'

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('ComponentDummy Component Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can render', () => {
                var component = TestUtils.renderIntoDocument(<ComponentDummy />);
            });

            it('Can run container', () => {
                var component = TestUtils.renderIntoDocument(<ComponentDummyContainer />);
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
