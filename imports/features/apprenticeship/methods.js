import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Topic } from '../../collections/topics/topics.js';

export const newTopic = new ValidatedMethod({
    name: 'newTopic',

    validate(args) {
        check(args, {
            title: String,
            description : String
        });
    },

    run(args) {
        //console.log('Executing on client?', this.isSimulation);
        // Create new object
        let t = new Topic({
            title : args.title,
            description : args.description
        });

        // Save it
        t.save();
        return t;
    },
});

export const newTopicMessage = new ValidatedMethod({
    name: 'newTopicMessage',

    validate(args) {
        check(args, {
            description : String
        });
    },

    run(args) {
        return "Not yet implemented.";
    },
});
