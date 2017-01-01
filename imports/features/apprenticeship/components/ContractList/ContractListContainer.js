import { createContainer } from 'meteor/react-meteor-data';
import ContractList from './ContractList.jsx';
import { ApprContract } from '../../../../collections/appr-contracts/appr-contracts.js';

export default createContainer((params) => {
    // Find the contract
    const contractSub = Meteor.subscribe('appr-contract');
    const contracts = ApprContract.find().fetch();
    return {
        loading : contractSub.ready(),
        contracts : contracts
    };
}, ContractList)
