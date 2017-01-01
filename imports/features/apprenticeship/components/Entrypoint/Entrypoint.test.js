/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import Entrypoint from './Entrypoint.jsx';
import EntrypointContainer from './EntrypointContainer.js'

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('Entrypoint Component Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can render', () => {
                var component = TestUtils.renderIntoDocument(<Entrypoint component={function(){return null}} />);
            });

            it('Can run container', () => {
                var component = TestUtils.renderIntoDocument(<EntrypointContainer />);
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
