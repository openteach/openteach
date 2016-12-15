import React, { Component } from 'react';
import Radium from 'radium';
import Modal from 'react-modal';

import TopicList from '../TopicList'
import TopicNewForm from '../TopicNewForm'
import ConversationNewForm from '../ConversationNewForm'

class ApprDashboard extends Component {

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
        const instructorName = this.props.instructor.name;
        const studentName = this.props.student.name;
        return (<div>
            <div className="row">
                <div className="large-8 columns">
                    <h1>{instructorName} teaching {studentName}</h1>
                </div>
                <div className="large-4 columns"><a onClick={this.toggleModal}>Contract</a></div>
            </div>
            <div className="row">
                <div className="large-6 small-12 columns">
                    <div className="row">
                        <h2>Topics</h2>
                    </div>
                    <TopicNewForm />
                    <TopicList />
                </div>
                <div className="large-6 small-12 columns">
                    <div className="row">
                        <h2>Conversations</h2>
                    </div>
                    <ConversationNewForm />
                </div>
            </div>
            <Modal isOpen={this.state.modalVisible} effect="fadeInDown"
                portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                contentLabel="Example Modal">

                <h1>Contract</h1>
                <div className="row">
                    <div className="large-6 columns small-12">
                        <h2>Learning Frame and Goals</h2>
                        <ul>
                            <li>An online blog setup using jekyll</li>
                            <li>A blog article elaborating on using jekyll</li>
                        </ul>
                        <h2>Learning Structure</h2>
                        <ul>
                            <li>Answers within same day</li>
                            <li>Two conversations a week</li>
                        </ul>
                        <h2>Formal Structure</h2>
                        <p>The student pays 50$ to the teach biweakly such that the
                        teacher has them after a week teaching.</p>
                    </div>
                    <div className="large-6 columns small-12">
                        <h2>Teaching Philosophy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec sit amet orci ligula. Vivamus dictum,
                            libero in volutpat bibendum, ante lorem vestibulum
                            felis, id ornare sapien quam vel ipsum. Pellentesque
                            lobortis felis nec sapien commodo luctus. Suspendisse
                            vel odio hendrerit, volutpat mauris quis, fringilla
                            justo. Aenean imperdiet vitae sapien ac volutpat.
                            Etiam volutpat, tortor non euismod tempus, leo massa
                            commodo mauris, nec dictum nibh leo nec ligula. Pham,
                            dictum vitae au</p>
                        <h2>Learning Philosophy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec sit amet orci ligula. Vivamus dictum,
                            libero in volutpat bibendum, ante lorem vestibulum
                            felis, id ornare sapien quam vel ipsum. Pellentesque
                            lobortis felis nec sapien commodo luctus. Suspendisse
                            vel odio hendrerit, volutpat mauris quis, fringilla
                            justo. Aenean imperdiet vitae sapien ac volutpat.
                            Etiam volutpat, tortor non euismod tempus, leo massa
                            commodo mauris, nec dictum nibh leo nec ligula. Pham,
                            dictum vitae au</p>
                    </div>
                </div>

                <div className="text-center">
                    <a href="javascript:void(0);" onClick={this.toggleModal}>
                        Close
                    </a>
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
