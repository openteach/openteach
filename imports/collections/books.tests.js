import { resetDatabase } from 'meteor/xolvio:cleaner';
import { assert } from 'meteor/practicalmeteor:chai';

describe('Books Collection', function () {
    beforeEach(function (done) {
        // Setup test data
        done();
    });

    it("can test", function(){
        // TODO: Remove this when more tests are added
        assert.equal(2, 2);
    })
});

if(Meteor.isServer){
    describe('Books Collection Server Tests', function () {
        beforeEach(function (done) {
            // Setup test data
            done();
        });

        it("can test", function(){
            // TODO: Remove this when more tests are added
            assert.equal(2, 2);
        })
    });
}
