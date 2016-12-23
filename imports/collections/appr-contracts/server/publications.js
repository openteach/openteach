import {ApprContract} from '../appr-contracts.js'

// TODO: Limit and offset
Meteor.publish('appr-contract', function() {
    return ApprContract.find();
});
