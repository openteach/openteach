import { createContainer } from 'meteor/react-meteor-data';
// import { someMethod as _someMethod } from '../../methods';

import Book from './Book';
export default createContainer(() => {
//   // Maybe write a higher-order function for this later
//   const someMethod = (args, callback) => {
//     _someMethod.call(args, callback);
//   };

  return {
    meteorData: 'goes here'
    // someMethod,
  }
}, Book)
