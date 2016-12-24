/**
 * This file is intended to set up the whole system
 */

function doBootstrap(){
    // Setup the instructor if he does not exist
    try {
        // TODO: Autogenerate password and send a mail
        let id = Accounts.createUser({

            profile: {
                name : "Instructor Joe"
            },
            isInstructor : true,
            email : Meteor.settings.instructor.email,
            password : "openteach"
        });
        Roles.addUsersToRoles(id, ['instructor'], 'openteach');
    } catch (e) {
        // User was already set up
    }
}
// If debug flag is set, run function
Meteor.startup(() => {
    doBootstrap();
});
