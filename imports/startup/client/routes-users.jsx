import React from 'react';
import {mount} from 'react-mounter';

import AppLayout from '../../common-ui/layouts/AppLayout.jsx';

import ListBooks from '../../features/book/components/ListBooks';
import Dashboard from '../../features/dashboard/components/Dashboard';
import ListBooks    from '../../features/book/components/ListBooks';
import Book from '../../features/book/components/Book/';
import TopicView from '../../features/apprenticeship/components/TopicView/';

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

userGroup.route('/course/:id/:chapterId?', {
    name: "bookRoute",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (
                <Dashboard selected={1}>
                    <Book id={params.id} currentChapter={params.chapterId} />
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

userGroup.route('/apprenticeship/:id', {
    name: "topicRoute",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (<TopicView topicId={params.id} />)
        })
    }
});
