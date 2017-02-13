import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';


export const sendResetPasswordMail = new ValidatedMethod({
    name: 'common.sendResetPasswordMail',
    validate(args) {
        check(args, {
            mail : String
        });
    },
    run({ mail }) {
        Accounts.forgotPassword({email : mail})
    },
});
