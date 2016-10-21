// Setup everything for development

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Courses } from '../../collections/courses.js'

/**
 * This function is made when the server is started in debug mode
 * It sets up:
 */
function debug(){
    Accounts.createUser({
        username : "test",
        email : "test@example.com",
        password : "test"
    });

    // Setup instructor
    // The instructor object resides in a file in a github repository.
    let demoInstructor = {
        courses : [
            {
                url : "git@github.com:openteach/test-course.git",
                base: "/course"
            },
            {
                url : "git@github.com:openteach/test-instructor.git",
                base: "/some-course"
            }
        ]
    }

    // Setup demo content
    let demoCourse = {
        title : "Test Course",
        index : {
            meta : {
                title : "Welcome"
            },
            content : "# This is the frontpage text of the course."
        },
        lectures : [
            {
                meta : {
                    title : "Test lecture 1"
                },
                content : "# Welcome to the First Lecture \nMore text here"
            },
            {
                meta : {
                    title : "Test lecture 2"
                },
                content : "# Welcome to the Second! Lecture \nAlright"
            }
        ]
    };

    Courses.schema.validate(demoCourse);

    Courses.upsert({title : demoCourse.title}, {$set : demoCourse});
}

// If debug flag is set, run function
Meteor.startup(() => {
  debug();
});
