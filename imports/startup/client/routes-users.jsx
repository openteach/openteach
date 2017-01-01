import React from 'react';
import {mount} from 'react-mounter';

import AppLayout from '../../common-ui/layouts/AppLayout';
import Settings from '../../common-ui/pages/Settings';
import Instructor from '../../common-ui/pages/Instructor';

import Dashboard from '../../features/dashboard/components/Dashboard';

// Books
import ListBooks    from '../../features/book/components/ListBooks';
import Book from '../../features/book/components/Book/';

// Apprenticeship
import Entrypoint from '../../features/apprenticeship/components/Entrypoint/';
import TopicView from '../../features/apprenticeship/components/TopicView/';

// Set up groups
var userGroup = FlowRouter.group({
    prefix: '/u',
    name: 'users',
    triggersEnter: [function(context, redirect) {
        // Test that the user is logged in
        if(!Meteor.loggingIn() && !Meteor.userId()){
            console.log("You at not logged in.");
            redirect("indexRoute");
        }
    }]
});

/**
 * User routes
 */

 userGroup.route('/settings', {
    name: "settingsRoute",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (<Settings />)
        });
    }
});

 userGroup.route('/instructor', {
    name: "instructorRoute",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (<Instructor />)
        });
    }
});

userGroup.route('/book/:id/:chapterId?', {
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

userGroup.route('/dashboard/apprenticeship', {
    name: "dashboardApprenticeship",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (  <Dashboard selected={0}>
                            <Entrypoint />
                        </Dashboard>)
        })
    }
});

userGroup.route('/apprenticeship/:id', {
    name: "topicRoute",
    action(params, queryParams) {
        mount(AppLayout, {
            content: (  <Dashboard selected={0}>
                            <TopicView topicId={params.id} />
                        </Dashboard>)
        })
    }
});
