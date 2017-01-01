import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';

class UserRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    goToDashboard(contractId){
        return function(e){
            Session.set("appr-current-contract", contractId);
            FlowRouter.go("dashboardApprenticeship");
        }
    }

    renderContractLinks() {
        return this.props.contracts.map((c, i) => {
            return (<a key={i} onClick={this.goToDashboard(c._id)}> Contract {i} </a>);
        });
    }

    render() {
        let u = this.props.user;
        return (<tr>
                    <td>
                        {u.profile.name}
                    </td>
                    <td>
                        <a onClick={this.props.modalFunction(u)}>New Contract</a>
                        {this.renderContractLinks()}
                    </td>
                </tr>)
    }
}

UserRow.propTypes = {
    user : React.PropTypes.object,
    contracts : React.PropTypes.array,
    modalFunction : React.PropTypes.func
};

UserRow.defaultProps = {
    contracts : []
};

const styles = {
    preview: {
        border: '1px dotted #aaa',
        height: '250px',
        padding: '3px'
    },
    textarea: {
        height: '250px',
    },
};

export default Radium(UserRow)
