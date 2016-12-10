import React from 'react';
import Modal from 'react-awesome-modal';
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

    openModal() {
        this.setState({visible : true});
    }

    closeModal() {
        this.setState({visible : false, loginError: false});
    }

    updateUser(event){
        this.setState({user: event.target.value, loginError: false});
    }

    updatePass(event){
        this.setState({pass: event.target.value, loginError: false});
    }

    render () {
        return (
            <div>
                <Modal
                    visible={this.state.visible}
                    width="400"
                    height="500"
                    effect="fadeInDown">
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
                                        type="text"
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
                    </form>
                    <div className="text-center">
                        <a href="javascript:void(0);"
                            onClick={this.closeModal.bind(this)}>
                            Close
                        </a>
                    </div>
                </Modal>
                <p className="text-center">Or</p>
                <p className="text-center">
                    <a
                        href="#0"
                        className="text-center secondary hollow button"
                        onClick={this.openModal.bind(this)}>
                        Sign in
                    </a>
                </p>
            </div>
        )
    }
}
