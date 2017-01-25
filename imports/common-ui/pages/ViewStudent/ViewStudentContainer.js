import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ViewStudent from './ViewStudent.jsx';
import { ApprContract } from '../../../collections/appr-contracts/appr-contracts.js';

export default createContainer(({id}) => {

    const subscription = Meteor.subscribe('accounts-instructor-users');
    const contractSub = Meteor.subscribe('appr-contract');

    const loading = !subscription.ready() && !contractSub.ready();
    const user = Meteor.users.findOne({_id : id});

    let contracts = [];
    if(user)
        contracts = ApprContract.find({studentIds : user._id}).fetch();

    return {
        isInstructor : true,
        contracts : contracts,
        loading : loading,
        user: user,
    }
}, ViewStudent)
