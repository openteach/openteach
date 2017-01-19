import { importRepoData } from '../../api/repositories/methods.js';

if ( Meteor.isServer ) {
    Picker.route('/api/v1/import/github', function(params, req, res, next) {
        try{
            importRepoData();
        } catch(e){
            console.log(e);
            res.writeHead(500);
            res.end("Malformed data or integration endpoint (more information will come)");
        }
        res.end("Done");
    });
}
