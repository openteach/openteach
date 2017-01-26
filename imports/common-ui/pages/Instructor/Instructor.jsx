import React from 'react';
import Radium from 'radium';
import Modal from 'react-modal';

import ContractNewForm from '../../../features/apprenticeship/components/ContractNewForm'
import LectureNewForm from '../../../features/lectures/components/LectureNewForm';
import UserRow from '../../components/UserRow';

class Instructor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contractModalVisible : false,
            userInView : {},
            lectureModal : false
        }

        this.closeContractModal = this.closeContractModal.bind(this);
        this.openContractModal = this.openContractModal.bind(this);
        this.togglLecturesModal = this.togglLecturesModal.bind(this);
    }

    togglLecturesModal() {
        this.setState({lectureModal : !this.state.lectureModal});
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
        return this.props.users.map((u, i) => {
            //return (<UserRow key={i} user={u} modalFunction={this.openContractModal} />);
            return (
                <tr key={i}>
                    <td>{u.profile.name}</td>
                    <td><a href={FlowRouter.path("viewStudentRoute", {"id" : u._id})}>Administrate</a></td>
                </tr>
            );
        });
    }

    renderLecturesList() {
        return this.props.lectures.map((l, i) => {
            return (<tr key={i}><td>{l.title}</td><td></td></tr>);
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

                        <table className="hover">
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

                <div className="row">
                    <div className="large-6 small-12 columns">
                        <h2>Lectures <input type="button" className="button" onClick={this.togglLecturesModal} value="New Lecture" /> </h2>
                        <p>Administrate your lectures here.</p>

                        <table>
                            <thead>
                                <tr>
                                    <th width="200">title</th>
                                    <th width="200">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderLecturesList()}
                            </tbody>
                        </table>
                    </div>
                </div>


                <Modal isOpen={this.state.lectureModal} effect="fadeInDown"
                    portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                    contentLabel="Example Modal">
                    <LectureNewForm />
                    <div className="text-center">
                        <button className="button" onClick={this.togglLecturesModal}>Close</button>
                    </div>
                </Modal>


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
    lectures : React.PropTypes.array,
    loading : React.PropTypes.bool,
    isInstructor : React.PropTypes.bool,
};

Instructor.defaultProps = {
    users : []
};

export default Radium(Instructor)
