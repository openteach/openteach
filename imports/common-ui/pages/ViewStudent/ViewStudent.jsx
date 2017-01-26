import React from 'react';
import Radium from 'radium';
import Modal from 'react-modal';

import ContractNewForm from '../../../features/apprenticeship/components/ContractNewForm'

class ViewStudent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contractModalVisible : false,
        }

        this.togglContractModal = this.togglContractModal.bind(this);
    }

    togglContractModal() {
        this.setState({contractModalVisible : !this.state.contractModalVisible});
    }

    goToDashboard(contractId){
        return function(e){
            Session.set("appr-current-contract", contractId);
            FlowRouter.go("dashboardApprenticeship");
        }
    }

    renderContractLinks() {
        return this.props.contracts.map((c, i) => {
            return (
                <tr key={i}>
                    <td>
                        <a onClick={this.goToDashboard(c._id)}> {c.title} </a>
                    </td>
                </tr>
            );
        });
    }

    renderApplication(){
        if(this.props.user.profile.application)
            return (<div>{this.props.user.profile.application}</div>)
        return (<div>This student has no application</div>)
    }

    render() {
        if(this.props.loading)
            return (<div>Loading..</div>);
        return(
            <div>
                <div className="text-center">
                    <h1>{this.props.user.profile.name}</h1>
                </div>
                <div className="row">
                    <div className="large-6 small-12 columns">
                        <h2>Contract <input type="button" className="button" onClick={this.togglContractModal} value="New Contract" /> </h2>
                        <table>
                            <thead>
                                <tr>
                                    <th width="200">Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderContractLinks()}
                            </tbody>
                        </table>
                    </div>
                    <div className="large-6 small-12 columns">
                        <h2>Application</h2>
                        {this.renderApplication()}
                    </div>
                </div>

                <Modal isOpen={this.state.contractModalVisible} effect="fadeInDown"
                    portalClassName="large-4 medium-6 small-12 columns large-centered medium-centered"
                    contentLabel="Example Modal">
                    <ContractNewForm student={this.props.user} instructor={Meteor.user()} />
                    <div className="text-center">
                        <button className="button" onClick={this.togglContractModal}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

ViewStudent.propTypes = {
    user : React.PropTypes.object,
    contract : React.PropTypes.array,
    loading : React.PropTypes.bool,
    isInstructor : React.PropTypes.bool,
};

ViewStudent.defaultProps = {
    users : []
};

export default Radium(ViewStudent)
