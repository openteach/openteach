import {ApprContract} from './appr-contracts/appr-contracts.js'

export function mustBeLoggedIn(e) {
    if (!e.trusted && !Meteor.userId()) {
        // Anonymous client.
        throw new Meteor.Error(
            'must-be-logged-in',
            'You must have an account to create a new Conversation.'
        );
    }
}

export function inContract(contractId){
    const c = ApprContract.findOne({_id : contractId});
    const userId = Meteor.userId();
    if(c.studentIds.indexOf(userId) < 0 && c.instructorIds.indexOf(userId) < 0 ){
        // Not in this contract.
        throw new Meteor.Error(
            'must-be-in-contract',
            'You do not have permissions on the contract.'
        );
    }
}

export function isOwner(documentUserId){
    const userId = Meteor.userId();
    if(documentUserId !== userId){
        // Not in this contract.
        throw new Meteor.Error(
            'must-be-owner',
            'You can not edit this element.'
        );
    }
}
