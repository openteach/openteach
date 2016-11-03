import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import Entrypage from './components/entrypage/Entrypage.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import ListBooks from '../imports/features/book/components/ListBooks';
import Book from '../imports/features/book/components/Book/';
import NotFound from '../imports/common-ui/pages/notfound-404/components/NotFound/NotFound.js';


FlowRouter.notFound = {
    action: function() {
        mount(MainLayout, {
            content: <NotFound />
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
            redirect("indexRoute");
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
userGroup.route('/course/:id/:chapterId?', {
    name: "bookRoute",
    action(params, queryParams) {
        mount(MainLayout, {
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
        mount(MainLayout, {
            content: (<Dashboard selected={0} />)
        })
    }
});

userGroup.route('/dashboard/books', {
    name: "dashboardBooks",
    action(params, queryParams) {
        mount(MainLayout, {
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
        mount(MainLayout, {
            content: (<Dashboard selected={2} />)
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
