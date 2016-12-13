// Setup everything for development

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Book, Books } from '../../collections/books.js';



/**
 * This function is made when the server is started in debug mode
 * It sets up:
 */
function debug(){
    try {
        Accounts.createUser({
            username : "test",
            email : "test@example.com",
            password : "test"
        });
    } catch (e) {
        // User was already set up
    }


    // Setup instructor
    // The instructor object resides in a file in a github repository.
    let demoInstructor = {
        books : [
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

    // Setup Demo book
    if(!Book.findOne({title : "Test Course"})){
        let demoBook = new Book({
            title : "Test Book",
            index : {
                meta : {
                    title : "Welcome"
                },
                content : "# This is the frontpage text of the book."
            },
            chapters : [
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
        });
        demoBook.save();
    }
}

// If debug flag is set, run function
Meteor.startup(() => {
    debug();
});
