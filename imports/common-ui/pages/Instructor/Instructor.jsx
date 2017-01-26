import React from 'react';
import Radium from 'radium';
import Modal from 'react-modal';

import ContractNewForm from '../../../features/apprenticeship/components/ContractNewForm'

class Instructor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contractModalVisible : false,
        }
    }


    renderUserList() {
        let chapterId = this.props.currentChapter;
        let book = this.props.book;

        return this.props.users.map((u, i) => {
            return (
                <tr key={i}>
                    <td>{u.profile.name}</td>
                    <td><a href={FlowRouter.path("viewStudentRoute", {"id" : u._id})}>Administrate</a></td>
                </tr>
            );
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
