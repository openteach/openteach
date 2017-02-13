import { createContainer } from 'meteor/react-meteor-data';
//import { someFunc as _someFunc } from 'path/to/methods.js';
import ComponentDummy from './ComponentDummy.jsx';

export default createContainer((params) => {
    //const someFunc = (args, callback) => _someFunc.call(args, callback);

    return {
    //    someFunc : someFunc
    };
}, ComponentDummy)
