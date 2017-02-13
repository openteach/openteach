import './bootstrap.js'
import './methods.js';
import '../common/accounts.js';
import './publications.js';
import './routes.js';

// We do development
if(Meteor.isDevelopment){
    import './develop.js'
}

Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset-password/' + token);
};
