import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';

class ContractNewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frameAndGoal : "",
            structure : "",
            formalStructure : ""
        }

        this.changeFrameAndGoal = this.changeFrameAndGoal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeFrameAndGoal(event) {this.setState({frameAndGoal: event.target.value});}

    onSubmit(event) {
        event.preventDefault();
        let that = this;
        this.props.newContract({}, (error, result) => {
            // Reset the form
            that.setState({
                frameAndGoal : "",
                structure : "",
                formalStructure : ""
            });
            FlowRouter.go("topicRoute", {"id" : result._id})
        });
    }

    render() {
        let md = new Remarkable();
        md.use(Meta);
        let html = md.render(this.state.description);
        return (
            <form onSubmit={this.onSubmit} action="">

            </form>)
    }
}

ContractNewForm.propTypes = {
    newContract : React.PropTypes.func
};

ContractNewForm.defaultProps = {};

const styles = {

};

export default Radium(ContractNewForm)
