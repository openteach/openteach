import React from 'react';
import Modal from 'react-awesome-modal';
import { Meteor } from 'meteor/meteor';

export default class SignInInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            user : "",
            pass : ""
        }

        this.updateUser = this.updateUser.bind(this);
        this.updatePass = this.updatePass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        Meteor.loginWithPassword(this.state.user, this.state.pass, function(err){
            if(typeof err === 'undefined'){
                FlowRouter.go("dashboardRoute", {show : "1"});
            } else {
                // error
                console.log("Error logging in");
                console.log(e);
            }
        })
    }

    openModal() {
        this.setState({visible : true});
    }

    closeModal() {
        this.setState({visible : false});
    }

    updateUser(event){
        this.setState({user: event.target.value});
    }

    updatePass(event){
        this.setState({pass: event.target.value});
    }

    render () {
        return (
            <div>
                {/* Importing React awesome modal from:
                    'http://shibe97.github.io/react-awesome-modal/'*/}
                <section>
                    <Modal
                        visible={this.state.visible}
                        width="400"
                        height="500"
                        effect="fadeInDown">
                        <div>
                            <h1 className="signIn__heading">
                                Sign in
                            </h1>
                            <p
                                className="signIn__subtext">
                                Please, choose your way of signing in
                            </p>
                            <form>
                                <div className="row">
                                    <label
                                        className="signIn__input__text signIn__input">
                                        Email
                                        <input
                                            placeholder="Email"
                                            value={this.state.user}
                                            onChange={this.updateUser}
                                            />
                                    </label>
                                    <label
                                        className="signIn__input__text signIn__input">
                                        Password
                                        <input
                                            placeholder="Password"
                                            name="password"
                                            value={this.state.pass}
                                            onChange={this.updatePass}
                                            />
                                    </label>
                                </div>
                            </form>
                            <div>
                                <a
                                    className="signIn__btn"
                                    href="#"
                                    onClick={this.onSubmit}>
                                    Sign in
                                </a>
                            </div>
                            <div className="SignIn__close__btn">
                                <a
                                    href="javascript:void(0);"
                                    onClick={this.closeModal.bind(this)}>
                                    Close
                                </a>
                            </div>
                        </div>
                    </Modal>
                </section>
                <p className="orTagline">Or</p>
                <p className="signInBtn">
                    <a
                        href="#0"
                        className="signInBtn__link"
                        onClick={this.openModal.bind(this)}>
                        Sign in
                    </a>
                </p>
            </div>
        )
    }
}
