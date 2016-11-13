import { Meteor } from 'meteor/meteor';

import { Instructor } from '../../../collections/instructor.js';
import { Book, convertToUrlStr, Chapter } from '../../../collections/books.js';

import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';

// Setup access to github
var github = new GitHub({
    version: "3.0.0", // required
    timeout: 5000,     // optional
    protocol: "https",
    headers: {
        "user-agent": "Greetings from OpenTeach" // GitHub is happy with a unique user agent
    },
});
github.authenticate({
    type: "oauth",
    token: Meteor.settings.githubApi.access_token
});
const getContent = Meteor.wrapAsync(github.repos.getContent, github.repos);


let fetchCourse = function(ghUser, ghRepo, base){
    // Find the Course.md
    let courseTxt = getContent({
        user: ghUser,
        repo : ghRepo,
        path : base + "/Book.md" });

    // Parse content to get metadata
    let bookIndexRaw = Base64.decode(courseTxt.content);
    var remarkable = new Remarkable();
    remarkable.use(Meta);
    remarkable.render(bookIndexRaw);
    let book = remarkable.meta;

    console.log("Fetching book: " + book.title);

    // Fetch all lectures of course
    chapterObjects = [];
    for(var i=0 ; i< book.chapters.length ; i++){
        try {
            resp = getContent({
                user: ghUser,
                repo : ghRepo,
                path : base + "/" + book.chapters[i] });
        } catch (e) {
            console.log("Not found: " + book.chapters[i]);
        }

        // Make sure there was a course
        if(typeof resp.content !== 'undefined'){

            // Parse md content to get metadata
            let fileContent = Base64.decode(resp.content);
            var md = new Remarkable();
            md.use(Meta);
            md.render(fileContent);
            let metadata = md.meta;

            console.log("got chapter: " + metadata.title);

            chapterObjects.push(new Chapter({
                meta : metadata,
                content : fileContent
            }));
        }
    }

    // Assemble and validate object for the database
    let bookColObj = {
        title : book.title,
        index : new Chapter({
            meta :  book,
            urlTitle : "",
            content : bookIndexRaw
        }),
        chapters : chapterObjects
    }
    // Books.schema.validate(bookColObj);

    // Find old
    let oldBook = Book.findOne({ urlTitle : convertToUrlStr(book.title) });

    if(!oldBook){
        // Create
        oldBook = new Book(bookColObj);
    }
    else {
        // Update
        oldBook.set(bookColObj)
    }

    oldBook.save();
}

// We expect a file names instructor.json in the root of a github repo
let fetchInstructor = function(ghUser, ghRepo){
    // Find the Course.md
    let instructorObj = getContent({
        user: ghUser,
        repo : ghRepo,
        path : "/instructor.json" });

    // Parse content to get metadata
    let iObj = JSON.parse(Base64.decode(instructorObj.content));
    console.log(iObj);

    // Assemble and validate object for the database
    // Instructor.schema.validate(iObj);

    // Upload instructor to db
    //Instructor.upsert({title : course.title}, {$set : course});
    return iObj;
}

export { fetchInstructor, fetchCourse };
