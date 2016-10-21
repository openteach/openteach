import { createContainer } from 'meteor/react-meteor-data';
// import { someMethod as _someMethod } from '../../methods';

import Lectures from './Lectures';
export default createContainer(() => {

  return {
    meteorData: 'goes here'
    // someMethod,
  }
}, Lectures)
