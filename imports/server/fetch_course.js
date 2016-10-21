import { Instructor } from '../collections/instructor';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import { Courses } from '../collections/courses.js';
import { Meteor } from 'meteor/meteor';

export default fetchCourse = function(ghUser, ghRepo, base){
    // Api Manager TODO: Api Key
    var github = new GitHub({
        version: "3.0.0", // required
        timeout: 5000,     // optional
        protocol: "https",
        headers: {
            "user-agent": "Greetings from OpenTeach" // GitHub is happy with a unique user agent
        },
    });

    // OAuth2 authenticate
    github.authenticate({
        type: "oauth",
        token: Meteor.settings.githubApi.access_token
    });

    // Wrap it in async
    const getContent = Meteor.wrapAsync(github.repos.getContent, github.repos);
    courseObjects = [];

    // Find the Course.md
    let courseTxt = getContent({
        user: ghUser,
        repo : ghRepo,
        path : base + "/Course.md" });

    // Parse content to get metadata
    let courseMdContent = Base64.decode(courseTxt.content);
    var courseMd = new Remarkable();
    courseMd.use(Meta);
    courseMd.render(courseMdContent);
    let courseData = courseMd.meta;

    console.log("Fetching course: " + courseData.title);

    // Fetch all lectures of course
    for(var i=0 ; i<courseData.lectures.length ; i++){
        resp = getContent({
            user: ghUser,
            repo : ghRepo,
            path : base + "/" + courseData.lectures[i] });

        // Make sure there was a course
        if(typeof resp.content !== 'undefined'){

            // Parse md content to get metadata
            let lecture = Base64.decode(resp.content);
            var md = new Remarkable();
            md.use(Meta);
            md.render(lecture);
            let metadata = md.meta;

            console.log("got lecture: " + metadata.title);

            courseObjects.push({
                meta : metadata,
                content : lecture
            })
        }
    }

    // Assemble and validate object for the database
    let course = {
        title : courseData.title,
        index : {
            meta :  courseData,
            content : courseMdContent
        },
        lectures : courseObjects
    }
    Courses.schema.validate(course);

    // Upload course to db
    Courses.upsert({title : course.title}, {$set : course});
}
