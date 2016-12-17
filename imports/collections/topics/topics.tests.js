import { resetDatabase } from 'meteor/xolvio:cleaner';
import { assert } from 'meteor/practicalmeteor:chai';

import {Topic} from './topics.js'

describe('Topic Collection', function () {

    it("can test", function(){
        // TODO: Remove this when more tests are added
        assert.equal(2, 2);
    })

    if(Meteor.isServer){
        describe('Slug test 1', function () {
            beforeEach(function () {
                resetDatabase();
            });

            it("can fail on empty description", function(){
                assert.equal(true, false);
            });

            it("can fail on empty title", function(){
                assert.equal(true, false);
            });
        });
    }
});
