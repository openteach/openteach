import React, { Component } from 'react';
import Radium from 'radium';
import Modal from 'react-modal';

import TopicList from '../TopicList'
import TopicNewForm from '../TopicNewForm'
import ConversationNewForm from '../ConversationNewForm'
import ContractView from '../ContractView'

class ApprDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible : false,
            newTopicModal : false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModalTopicForm = this.toggleModalTopicForm.bind(this);
    }

    toggleModal(e) {
        this.setState({modalVisible : !this.state.modalVisible});
    }
    toggleModalTopicForm(e) {
        this.setState({newTopicModal : !this.state.newTopicModal});
    }

    render() {
        const instructorName = this.props.instructor.name;
        const studentName = this.props.student.name;
        return (<div>
            <div className="row">
                <div className="large-8 columns">
                    <h1>{instructorName} teaching {studentName}</h1>
                </div>
                <div className="large-4 columns"><button onClick={this.toggleModal} className="button">Contract</button></div>
            </div>
            <div className="row">
                <div className="large-6 small-12 columns">
                    <div className="row">
                        <h2>Topics <input type="button" className="button" onClick={this.toggleModalTopicForm} value="New Topic" /></h2>
                    </div>
                    <TopicList />
                </div>
                <div className="large-6 small-12 columns">
                    <div className="row">
                        <h2>Conversations</h2>
                    </div>
                    <ConversationNewForm />
                </div>
            </div>


            <Modal isOpen={this.state.newTopicModal} effect="fadeInDown"
                portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                contentLabel="Example Modal">
                <TopicNewForm />
                <div className="text-center">
                    <button className="button" onClick={this.toggleModalTopicForm}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={this.state.modalVisible} effect="fadeInDown"
                portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                contentLabel="Example Modal">
                <ContractView />
                <div className="text-center">
                    <button className="button" onClick={this.toggleModal}>Close</button>
                </div>
            </Modal>
        </div>);
    }
}

ApprDashboard.propTypes = {
    instructor: React.PropTypes.object,
    student: React.PropTypes.object,
};

ApprDashboard.defaultProps = {};

export default Radium(ApprDashboard)
