import { createContainer } from 'meteor/react-meteor-data';
import { newContract as _newContract } from '../../methods.js';
import ContractNewForm from './ContractNewForm.jsx';

export default createContainer((params) => {
    const newContract = (args, callback) => _newContract.call(args, callback);

    return {
        newContract : newContract
    };
}, ContractNewForm)
