import './methods.js';
import '../common/accounts.js';
import './publications.js';
import './routes.js';

// We do development
if(Meteor.isDevelopment){
    import './develop.js'
}
