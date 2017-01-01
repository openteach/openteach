/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';

import methods from './methods.js';

/**
This initial version of the test file merely makes sure all files are included
to see that they are parsed properly
**/

describe('Apprenticeship Methods Tests', () => {
    if (Meteor.isClient) {
        describe('Client Test', () => {
            it('Can have empty test', () => {
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
