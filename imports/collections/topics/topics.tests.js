import { resetDatabase } from 'meteor/xolvio:cleaner';
import { assert } from 'meteor/practicalmeteor:chai';

import {Topic} from './topics.js'

describe('Topic Collection', function () {

    it("can test", function(){
        // TODO: Remove this when more tests are added
        assert.equal(2, 2);
    })

    if(Meteor.isServer){
        describe('Topic collection is well behaved', function () {
            beforeEach(function () {
                resetDatabase();
            });

            it("can fail on empty description", function(done){
                const t = new Topic({
                    contractId : "sd",
                    title : "sdsd",
                    description : "",
                    authorName : "Ole",
                    authorId : "sdsd"
                });

                t.validate(function(err) {
                    assert.equal(err.details[0].message, "Description can not be empty.");
                    done();
                });
            });

            it("can fail on empty title", function(done){
                const t = new Topic({
                    contractId : "sd",
                    title : "",
                    description : "asdasd",
                    authorName : "Ole",
                    authorId : "sdsd"
                });

                t.validate(function(err) {
                    assert.equal(err.details[0].message, "Title can not be empty.");
                    done();
                });
            });
        });
    }
});
