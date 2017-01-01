/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import ContractList from './ContractList.jsx';
import ContractListContainer from './ContractListContainer.js'

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('ContractList Component Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can render', () => {
                var component = TestUtils.renderIntoDocument(<ContractList contracts={[]} />);
            });

            it('Can run container', () => {
                var component = TestUtils.renderIntoDocument(<ContractListContainer />);
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
