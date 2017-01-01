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
                        <span className="title">{i} : {c.title}</span>
                        <div>Some Description</div>
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
            <div  className="row">
                {this.renderElements()}
            </div>)
    }
}

ContractsList.propTypes = {
    contracts : React.PropTypes.array,
    loading: React.PropTypes.bool
};

ContractsList.defaultProps = {};

const styles = {};

export default Radium(ContractsList);
