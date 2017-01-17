import React, { Component } from 'react';
import Radium from 'radium';
import Modal from 'react-modal';

import TopicList from '../TopicList'
import TopicNewForm from '../TopicNewForm'
import ConversationList from '../ConversationList'
import ConversationNewForm from '../ConversationNewForm'
import ContractView from '../ContractView'

class ApprDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible : false,
            newTopicModal : false,
            newConversationModal : false
        }

        this.toggleContractModal = this.toggleContractModal.bind(this);
        this.toggleModalTopicForm = this.toggleModalTopicForm.bind(this);
        this.toggleModalConversationForm = this.toggleModalConversationForm.bind(this);
    }

    toggleContractModal(e) {
        this.setState({modalVisible : !this.state.modalVisible});
    }
    toggleModalTopicForm(e) {
        this.setState({newTopicModal : !this.state.newTopicModal});
    }
    toggleModalConversationForm(e) {
        this.setState({newConversationModal : !this.state.newConversationModal});
    }

    render() {
        if(this.props.loading)
            return (<div>Loading...</div>)

        const instructorName = this.props.instructor.name;
        const studentName = this.props.student.name;

        return (<div>
            <div className="row">
                <div className="large-8 columns">
                    <h1>{instructorName} teaching {studentName}</h1>
                </div>
                <div className="large-4 columns"><button onClick={this.toggleContractModal} className="button">Contract</button></div>
            </div>
            <div className="row">
                <div className="large-6 small-12 columns">
                    <div className="row">
                        <h2>Topics <input type="button" className="button" onClick={this.toggleModalTopicForm} value="New Topic" /></h2>
                    </div>
                    <TopicList contract={this.props.contract} />
                </div>
                <div className="large-6 small-12 columns">
                    <div className="row">
                        <h2>Conversations <input type="button" className="button" onClick={this.toggleModalConversationForm} value="New Conversation" /></h2>
                    </div>
                    <ConversationList contract={this.props.contract} />
                </div>
            </div>


            <Modal isOpen={this.state.newTopicModal}
                portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                contentLabel="Example Modal">

                <TopicNewForm contract={this.props.contract} />

                <div className="text-center">
                    <button className="button" onClick={this.toggleModalTopicForm}>Close</button>
                </div>
            </Modal>

            <Modal isOpen={this.state.newConversationModal}
                portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                contentLabel="Example Modal">

                <ConversationNewForm contract={this.props.contract} />

                <div className="text-center">
                    <button className="button" onClick={this.toggleModalConversationForm}>Close</button>
                </div>
            </Modal>

            <Modal isOpen={this.state.modalVisible}
                portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                contentLabel="Example Modal">

                <ContractView contract={this.props.contract} />

                <div className="text-center">
                    <button className="button" onClick={this.toggleContractModal}>Close</button>
                </div>
            </Modal>
        </div>);
    }
}

ApprDashboard.propTypes = {
    instructor: React.PropTypes.object,
    student: React.PropTypes.object,
    contract : React.PropTypes.object,
    loading: React.PropTypes.bool
};

ApprDashboard.defaultProps = {};

const styles = {}

export default Radium(ApprDashboard)
