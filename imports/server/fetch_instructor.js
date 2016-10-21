import { Meteor } from 'meteor/meteor';
import { Instructor } from '../collections/instructor';

// We expect a file names instructor.json in the root of a github repo
export default fetchInstructor = function(ghUser, ghRepo){
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
    let instructorObj = getContent({
        user: ghUser,
        repo : ghRepo,
        path : "/instructor.json" });

    // Parse content to get metadata
    let instructorText = Base64.decode(instructorObj.content);
    let iObj = JSON.parse(instructorText);

    console.log(iObj);

    // Assemble and validate object for the database
    Instructor.schema.validate(iObj);

    // Upload instructor to db
    //Instructor.upsert({title : course.title}, {$set : course});
    return iObj;
}
