import React from 'react';
import Modal from 'react-awesome-modal';
import { Meteor } from 'meteor/meteor';

export default class SignInInput extends React.Component {

    onSubmit(e){
        Meteor.loginWithPassword(this.refs.user, this.refs.password, function(e){
            if(typeof e === 'undefined'){
                FlowRouter.go("dashboardRoute", {show : "1"});
            } else {
                // error
                console.log("Error logging in");
                console.log(e);
            }
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
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
                                        <input type="email"
                                            ref="user"
                                            placeholder="Email"
                                            />
                                    </label>
                                    <label
                                        className="signIn__input__text signIn__input">
                                        Password
                                        <input type="password"
                                            ref="password"
                                            placeholder="Password"
                                            />
                                    </label>
                                </div>
                            </form>
                            <div>
                                <a
                                    className="signIn__btn"
                                    href="#"
                                    >
                                    Sign in
                                </a>
                            </div>
                            <div>
                                <p
                                    className="signIn__orSubText">
                                    or sign in with
                                </p>
                            </div>
                            <div className="signIn__social__btn">
                                <a href="#" className="signIn__facebook__btn">Facebook</a>
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
