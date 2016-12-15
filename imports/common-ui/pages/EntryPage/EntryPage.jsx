import React from 'react';
import Modal from 'react-modal';
import SignUpForm from '../../components/SignUpForm';
import SignInForm from '../../components/SignInForm';

export default class Entrypage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible : false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(e) {
        this.setState({modalVisible : !this.state.modalVisible});
    }

    render() {
        return(
            <div>
                <div className="row expanded">
                    <div>
                        <h5 className="large-2 small-4 column float-left" id="entrypage-title">openTeach</h5>
                    </div>
                    <div className="large-2 small-4 column right text-right" id="github-logo">
                        <a href="https://github.com/openteach/openTeach">
                            <i className="fi-social-github white"></i>
                        </a>
                    </div>
                </div>

                <div className="row" id="entrypage-main-row">
                    <div className="large-centered columns large-4">
                        <h4 className="white text-center"> Learn with {this.props.instructor.name} </h4>
                        <SignUpForm />

                        <div>
                            <Modal isOpen={this.state.modalVisible} effect="fadeInDown"
                                portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                                contentLabel="Example Modal">
                                <SignInForm />
                                <div className="text-center">
                                    <a href="javascript:void(0);"
                                        onClick={this.toggleModal}>
                                        Close
                                    </a>
                                </div>
                            </Modal>
                            <p className="text-center">Or</p>
                            <p className="text-center">
                            <a href="#0" className="text-center secondary hollow button"
                                onClick={this.toggleModal}>
                                Sign in
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Entrypage.propTypes = {
    instructor : React.PropTypes.object
};

Entrypage.defaultProps = {
    instructor : {
        name : "[instructor]"
    }
};
