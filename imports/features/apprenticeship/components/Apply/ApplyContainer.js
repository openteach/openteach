import { createContainer } from 'meteor/react-meteor-data';
import { editApplication as _editApplication } from '../../methods';

import Apply from './Apply.js';
export default createContainer(() => {
    const editApplication = (args, callback) => _editApplication.call(args, callback);

    return {
        editApplication : editApplication
    }
}, Apply)
