import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';

class ContractsList extends Component {
    openContract(contractId){
        return function(e){
            Session.set('appr-current-contract', contractId);
        }
    }

    renderElements() {
        let contracts = this.props.contracts;
        return contracts.map((c, i) => (
            <div key={c._id} className=" large-6 small-12 columns">
                <div className="card">
                    <div className="content">
                        <span className="title">{c.title}</span>
                        <div>
                            Short status on this constract here.
                        </div>
                    </div>
                    <div className="action">
                        <a onClick={this.openContract(c._id)}>Open</a>
                    </div>
                </div>
            </div>
        ));
    }
    render() {
        return (
            <div>
                <div className="expanded row text-center app-header">
                    <div className="large-12 columns">
                        <h1>Apprenticeship</h1>
                        <p>Apprenticeship training</p>
                    </div>
                </div>
                <div  className="row">
                    {this.renderElements()}
                </div>
            </div>
        )
    }
}

ContractsList.propTypes = {
    contracts  : React.PropTypes.array,
    student    : React.PropTypes.object,
    instructor : React.PropTypes.object,
    loading    : React.PropTypes.bool
};

ContractsList.defaultProps = {};

const styles = {};

export default Radium(ContractsList);
