import React from 'react';

export default class SignUpInput extends React.Component {
    onSubmit(e){
        e.preventDefault();

        //TODO: Create meteor user
        Accounts.createUser({
            profile : {
                name : e.target.uname.value
            },
            email : e.target.umail.value,
            password : e.target.upass.value
        }, function(e){
            if(typeof e === 'undefined'){
                FlowRouter.go("dashboardApprenticeship");
            }else{
                //login error
                console.log("Error signing up");
            }
        });

        return 0;
    }

    render() {
        return (
            <div className="signUpInput text-center">
                <form onSubmit={this.onSubmit}>
                    <input name="uname" type="text" placeholder="Name" ref={(f) => {this._uname = f}} />
                    <input name="umail" type="text" placeholder="Email" ref={(f) => this._umail = f} />
                    <input name="upass" type="text" placeholder="Password" ref={(f) => this._upass = f} />
                    <input className="button success" type="submit" value="Sign up" />
                </form>
            </div>
        )}
    };
