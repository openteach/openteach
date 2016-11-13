import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../../common-ui/layouts/MainLayout.jsx';

import Dashboard from '../../common-ui/pages/dashboard/Dashboard.jsx';
import ListBooks from '../../features/book/components/ListBooks';
import Book from '../../features/book/components/Book/';

// Set up groups
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
