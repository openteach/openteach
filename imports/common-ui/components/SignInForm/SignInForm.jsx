import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class SignInInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            user : "",
            pass : "",
            loginError : false
        }

        this.updateUser = this.updateUser.bind(this);
        this.updatePass = this.updatePass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
    }


    forgotPassword(event){
        event.preventDefault();
        let that = this;
        Accounts.forgotPassword({email : this.state.user}, function(err){
            if(typeof err === 'undefined'){
                console.log("mail sent.")
            } else {
                console.log(err);
                that.setState({loginError : true});
            }
        });
    }

    onSubmit(event){
        event.preventDefault();
        let that = this;
        Meteor.loginWithPassword(this.state.user, this.state.pass, function(err){
            if(typeof err === 'undefined'){
                FlowRouter.go("dashboardBooks");
            } else {
                console.log(err);
                that.setState({loginError : true});
            }
        })
    }

    updateUser(event){
        this.setState({user: event.target.value, loginError: false});
    }

    updatePass(event){
        this.setState({pass: event.target.value, loginError: false});
    }

    render () {
        return ( <div>
                    <h1 className="text-center">
                        Sign in
                    </h1>
                    <p
                        className="text-center">
                        Welcome - Sign in and start learning today!
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className={this.state.loginError ? "" : "hide"}>
                                <div className="medium-centered medium-10 columns">
                                    <div className="callout alert">
                                        Wrong password or username.
                                    </div>
                                </div>
                            </div>
                            <div className="medium-10 columns medium-centered">
                                <label>
                                    Email
                                    <input
                                        id="mail"
                                        type="text"
                                        placeholder="Email"
                                        value={this.state.user}
                                        onChange={this.updateUser} />
                                </label>
                            </div>
                            <div className="medium-10 columns medium-centered">
                                <label>
                                    Password
                                    <input
                                        id="password"
                                        type="password"
                                        id="js-signIn__input"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.pass}
                                        onChange={this.updatePass} />
                                </label>
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit"
                                className="button success signInButton"
                                onClick={this.onSubmit} value="Sign in" />
                        </div>
                        <div className="text-center">
                            <a onClick={this.forgotPassword}>Forgot Password</a>
                        </div>
                    </form>
                </div>)
    }
}
