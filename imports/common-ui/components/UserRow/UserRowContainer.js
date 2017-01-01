import { createContainer } from 'meteor/react-meteor-data';
import { ApprContract } from '../../../collections/appr-contracts/appr-contracts.js';

import UserRow from './UserRow.jsx';
export default createContainer(({user}) => {

    const contracts = ApprContract.find({studentIds : user._id}).fetch();

    return {
        contracts : contracts
    };
}, UserRow)
