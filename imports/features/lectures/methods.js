import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Lecture } from '../../collections/lectures/lectures.js';

export const newLecture = new ValidatedMethod({
    name: 'appr.newLecture',
    validate(args) {
        check(args, {
            title: String,
            description : String,
        });
    },
    run({ title, description }) {
        //console.log('Executing on client?', this.isSimulation);

        // Current usre has authered
        let authorName = Meteor.user().profile.name;

        // Create new object
        let l = new Lecture({
            title : title,
            description : description,
            authorName : authorName,
            authorId : Meteor.userId()
        });

        // Save it
        l.save();
        return l._id;
    },
});
