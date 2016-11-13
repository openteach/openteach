import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../../common-ui/layouts/MainLayout.jsx';

import Entrypage from '../../common-ui/pages/entrypage/Entrypage.jsx';
import NotFound from '../../common-ui/pages/notfound-404/components/NotFound/NotFound.js';


FlowRouter.notFound = {
    action: function() {
        mount(MainLayout, {
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
        mount(MainLayout, {
            content: (<Entrypage />)
        })
    }
})
