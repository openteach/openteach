import React from 'react';
import {mount} from 'react-mounter';

import PublicLayout from '../../common-ui/layouts/PublicLayout.jsx';
import AppLayout from '../../common-ui/layouts/AppLayout.jsx';

import Entrypage from '../../common-ui/pages/entrypage/Entrypage.jsx';
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

/**
 * User routes
 */

// /u/course/:courseId...
userGroup.route('/course/:id/:chapterId?', {
    name: "bookRoute",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (
                <Dashboard selected={1}>
                    <Book id={params.id} chapterId={params.chapterId} />
                </Dashboard>)
        });
    }
});

userGroup.route('/dashboard/apprenticeship', {
    name: "dashboardApprenticeship",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (<Dashboard selected={0} />)
        })
    }
});

userGroup.route('/dashboard/books', {
    name: "dashboardBooks",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (
                <Dashboard selected={1}>
                    <ListBooks />
                </Dashboard>)
        })
    }
});

userGroup.route('/dashboard/lectures', {
    name: "dashboardLectures",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (<Dashboard selected={2} />)
        })
    }
});

userGroup.route('/apprenticeship', {
    name: "apprenticeshipRoute",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (<Apprenticeship />)
        })
    }
});
