/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import LectureNewForm from './LectureNewForm.jsx';
import LectureNewFormContainer from './LectureNewFormContainer.js'

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('LectureNewForm Component Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can render', () => {
                const newContract = function(){};
                const student = {profile : {name : "Test"}};
                const instructor = {profile : {name : "Test"}};
                var component = TestUtils.renderIntoDocument(<LectureNewForm />);
            });

            it('Can run container', () => {
                const newContract = function(){};
                const student = {profile : {name : "Test"}};
                const instructor = {profile : {name : "Test"}};
                var component = TestUtils.renderIntoDocument(<LectureNewFormContainer />);
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
