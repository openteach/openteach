import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import Entrypage from './components/entrypage/Entrypage.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Book from '../imports/features/book/components/Book/';
import NotFound from '../imports/common-ui/pages/notfound-404/components/NotFound/NotFound.js';

FlowRouter.notFound = {
    action: function() {
        mount(MainLayout, {
            content: <NotFound /> // remember to import!!!
        });
    }
};

/**
 * Setting up groups
 * TODO: Factor this to own file
 */

// Set up groups
var publicGroup = FlowRouter.group({
    prefix: '/',
    name: 'public',
    triggersEnter: [function(context, redirect) {
        console.log('running group triggers for public group');
    }]
});

var userGroup = FlowRouter.group({
    prefix: '/u',
    name: 'users',
    triggersEnter: [function(context, redirect) {
        // Test that the user is logged in
        if(!Meteor.user()){
            console.log("You at not logged in.");
            FlowRouter.go("indexRoute");
        }
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

/**
 * User routes
 */

// /u/course/:courseId...
userGroup.route('/course/:courseId/:lectureId?', {
    name: "courseRoute",
    action(params, queryParams) {
        mount(MainLayout, {
            content: <Book courseId={params.courseId} lectureId={params.lectureId}  />
        });
    }
});

userGroup.route('/dashboard/:show?', {
    name: "dashboardRoute",
    action(params, queryParams) {
        console.log(params.show);
        mount(MainLayout, {
            content: (<Dashboard selected={params.show} />)
        })
    }
});

userGroup.route('/apprenticeship', {
    name: "apprenticeshipRoute",
    action(params, queryParams) {
        mount(MainLayout, {
            content: (<Apprenticeship />)
        })
    }
})
