import { createContainer } from 'meteor/react-meteor-data';
import Entrypoint from './Entrypoint.jsx';
import { ApprContract } from '../../../../collections/appr-contracts/appr-contracts.js';

import ApprDashboard from '../ApprDashboard';
import ContractList from '../ContractList';
import Apply from '../Apply';

export default createContainer((params) => {

    // If we have choosen a contract
    const currentContract = Session.get("appr-current-contract");
    if(typeof currentContract !== "undefined"){
        return {component : ApprDashboard}
    }

    /*
        if the session variable is not set, we have 3 cases:

        1. No contracts: Show an application form
        2. A single contract: Show the ApprDashboard directly
        3. Multiple contracts: Show the ContractList
    */

    // Find the contract
    const contractSub = Meteor.subscribe('appr-contract');

    if(!contractSub.ready()){
        return {component : function(){return false;}};
    }

    const contracts = ApprContract.find().fetch();

    if(contracts.length === 0){
        return {component : Apply}
    } if(contracts.length === 1){
        Session.set("appr-current-contract", contracts[0]._id);
        return {component : ApprDashboard}
    } if(contracts.length > 1){
        return {component : ContractList}
    }

    // We never get to here
    throw "error";
}, Entrypoint)
