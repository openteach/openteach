import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const newLecture = new ValidatedMethod({
    name: 'appr.newTopic',
    validate(args) {
        check(args, {
            title: String,
            description : String,
            tags : [String],
            contractId : String,
        });
    },
    run({ title, description, tags, contractId }) {
        //console.log('Executing on client?', this.isSimulation);

        // Current usre has authered
        let authorName = Meteor.user().profile.name;

        // Create new object
        let t = new Topic({
            title : title,
            description : description,
            authorName : authorName,
            contractId : contractId,
            tags : tags,
            authorId : Meteor.userId()
        });

        // add tags we haevn't seen before for autocompletion
        const contract = ApprContract.findOne({_id : contractId});

        newTags = uniq(contract.tags.concat(tags));

        if(newTags.length !== contract.tags.length){
            contract.tags = newTags;
            contract.save();
        }

        // Save it
        t.save();
        return t;
    },
});
