// Setup everything for development

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(function () {
    // DB pre-population here
    Accounts.createUser({
        username : "test",
        email : "test@example.com",
        password : "test"
    });
});