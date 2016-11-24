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
                FlowRouter.go("dashboardBooks");
            } else {
                // error
                console.log("Error logging in");
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
                        <div className="modalBackground">
                            <h1 className="text-center whiteText">
                                Sign in
                            </h1>
                            <p
                                className="text-center whiteText">
                                Welcome - Sign in and start learning today!
                            </p>
                            <form>
                                <div className="row">
                                    <p
                                        className="text-center signInInputEmail">
                                        Email
                                        <input
                                            className="medium-6 blackText"
                                            placeholder="Email"
                                            value={this.state.user}
                                            onChange={this.updateUser}
                                            />
                                    </p>
                                    <p
                                        className="text-center">
                                        Password
                                        <input
                                            className="medium-6 blackText"
                                            id="js-signIn__input"
                                            placeholder="Password"
                                            name="password"
                                            value={this.state.pass}
                                            onChange={this.updatePass}
                                            />
                                    </p>
                                </div>
                            </form>
                            <div className="text-center">
                                <a
                                    className="button success signInButton"
                                    href="#"
                                    onClick={this.onSubmit}>
                                    Sign in
                                </a>
                            </div>
                            <div className="text-center">
                                <a
                                    className="whiteText"
                                    href="javascript:void(0);"
                                    onClick={this.closeModal.bind(this)}>
                                    Close
                                </a>
                            </div>
                        </div>
                    </Modal>
                </section>
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
