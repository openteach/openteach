import React from 'react';
import Radium from 'radium';
import Modal from 'react-modal';

import ContractNewForm from '../../../features/apprenticeship/components/ContractNewForm'
import UserRow from '../../components/UserRow';

class Instructor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contractModalVisible : false,
            userInView : {}
        }

        this.closeContractModal = this.closeContractModal.bind(this);
        this.openContractModal = this.openContractModal.bind(this);
    }

    openContractModal(user) {
        let that = this;
        return function(e){
            that.setState({
                contractModalVisible : true,
                userInView : user
            });
        }
    }

    closeContractModal(e){
        this.setState({
            contractModalVisible : false,
            userInView : {}
        });
    }

    renderUserList() {
        let chapterId = this.props.currentChapter;
        let book = this.props.book;

        return this.props.users.map((u, i) => {
            return (<UserRow key={i} user={u} modalFunction={this.openContractModal} />);
        });
    }

    render() {
        return(
            <div>
                <div className="text-center">
                    <h1>Instructor</h1>
                </div>
                <div className="row">
                    <div className="large-6 small-12 columns">
                        <h2>General</h2>
                        <div className="row">
                            <div className="large-12 columns">
                                <label>Name
                                    <input type="text" value="[Instructor Name]" disabled />
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="large-12 columns">
                                <label>Teaching Philosophy
                                    <textarea className="large-12 small-12 columns" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="large-6 small-12 columns">
                        <h2>Teaching Philosophy</h2>
                        <p>...</p>
                        <h2>GitHub</h2>
                        <p>Most of your settings are stored in github</p>
                    </div>
                </div>
                <div className="row">
                    <div className="large-6 small-12 columns">
                        <h2>Users</h2>
                        <p>Administrate your users here.</p>

                        <table>
                            <thead>
                                <tr>
                                    <th width="200">Name</th>
                                    <th width="200">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderUserList()}
                            </tbody>
                        </table>
                    </div>
                </div>


                <Modal isOpen={this.state.contractModalVisible} effect="fadeInDown"
                    portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                    contentLabel="Example Modal">
                    <ContractNewForm student={this.state.userInView} instructor={Meteor.user()} />
                    <div className="text-center">
                        <button className="button" onClick={this.closeContractModal}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

Instructor.propTypes = {
    users : React.PropTypes.array,
    loading : React.PropTypes.bool,
    isInstructor : React.PropTypes.bool,
};

Instructor.defaultProps = {
    users : []
};

export default Radium(Instructor)
