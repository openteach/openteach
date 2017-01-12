/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import LecturesList from './LecturesList.jsx';
import LecturesListContainer from './LecturesListContainer.js'

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('LecturesList Component Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can render', () => {
                var component = TestUtils.renderIntoDocument(<LecturesList loading={false} lectures={[]} />);
            });

            it('Can run container', () => {
                var component = TestUtils.renderIntoDocument(<LecturesListContainer contract={{_id : "bah"}} />);
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
