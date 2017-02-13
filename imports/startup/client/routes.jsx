import React from 'react';
import {mount} from 'react-mounter';

import PublicLayout from '../../common-ui/layouts/PublicLayout.jsx';

import Entrypage from '../../common-ui/pages/EntryPage/';
import ResetPassword from '../../common-ui/pages/ResetPassword/';
import NotFound from '../../common-ui/pages/notfound-404/components/NotFound/NotFound.js';


FlowRouter.notFound = {
    action: function() {
        mount(PublicLayout, {
            content: <NotFound />
        });
    }
};

// Set up groups
var publicGroup = FlowRouter.group({
    prefix: '/',
    name: 'public',
    triggersEnter: [function(context, redirect) {
        console.log('running group triggers for public group');
    }]
});

/**
 * Public routes
 */

// Root, mounting entry component
publicGroup.route('/', {
    name: "indexRoute",
    triggersEnter: [function(context, redirect) {
        // Test that the user is logged in
        if(Meteor.userId()){
            redirect("dashboardBooks");
        }
    }],
    action(params, queryParams){
        mount(PublicLayout, {
            content: (<Entrypage instructor={{name : Meteor.settings.public.instructorName}} />)
        })
    }
});

FlowRouter.route('/reset-password/:token', {
    name: "resetPasswordRoute",
    action(params, queryParams){
        mount(PublicLayout, {
            content: (<ResetPassword token={params.token} />)
        })
    }
});
