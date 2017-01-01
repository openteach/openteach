/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import UserRow from './UserRow.jsx';
import UserRowContainer from './UserRowContainer.js'

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('UserRow Component Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can render', () => {
                var component = TestUtils.renderIntoDocument(<UserRow user={{_id:"component",profile:{name:"sdsd"}}} modalFunction={function(){}} />);
            });

            it('Can run container', () => {
                var component = TestUtils.renderIntoDocument(<UserRowContainer user={{_id : "container",profile:{name:"sdsd"}}} modalFunction={function(){}} />);
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
