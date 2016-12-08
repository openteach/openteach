import React from 'react';
import {mount} from 'react-mounter';

import PublicLayout from '../../common-ui/layouts/PublicLayout.jsx';

import Entrypage from '../../common-ui/pages/EntryPage/';
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
    action(params, queryParams){
        mount(PublicLayout, {
            content: (<Entrypage />)
        })
    }
});
