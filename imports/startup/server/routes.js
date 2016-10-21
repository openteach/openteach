import { importRepoData } from '../../api/repositories/methods.js';

if ( Meteor.isServer ) {
    Picker.route('/api/v1/import/github', function(params, req, res, next) {
        importRepoData();
        res.end("Done");
    });
}
