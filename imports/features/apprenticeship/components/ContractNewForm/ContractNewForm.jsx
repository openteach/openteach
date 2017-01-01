import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';

class ContractNewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contractGoals : "",
            learningStructure : "",
            formalStructure : ""
        }

        this.changeGoals = this.changeGoals.bind(this);
        this.changeLearnStructure = this.changeLearnStructure.bind(this);
        this.changeFormalStructure = this.changeFormalStructure.bind(this);

        this.changeGoals = this.changeGoals.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeGoals(event) {this.setState({contractGoals: event.target.value});}
    changeLearnStructure(event) {this.setState({learningStructure: event.target.value});}
    changeFormalStructure(event) {this.setState({formalStructure: event.target.value});}

    onSubmit(event) {
        event.preventDefault();
        let that = this;
        this.props.newContract({
            contractGoals: this.state.contractGoals,
            learningStructure : this.state.learningStructure,
            formalStructure : this.state.formalStructure,
            studentId : this.props.student._id,
            instructorId : this.props.instructor._id
        }, (error, result) => {
            // Reset the form
            that.setState({
                frameAndGoal : "",
                structure : "",
                formalStructure : ""
            });

            Session.set("appr-current-contract", result._id);
            FlowRouter.go("dashboardApprenticeship");
        });
    }

    render() {
        let md = new Remarkable();
        md.use(Meta);
        let html = md.render(this.state.description);
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="large-6 small-12 columns">
                        <h4>Goals</h4>
                        <p>
                            List some goals for this project. The more concrete
                            the better. This could be a piece of programming,
                            an article, or some third.
                        </p>
                        <textarea onChange={this.changeGoals} />

                        <h4>Frame</h4>
                        <p>To keep track of a project one must have an idea on
                            how it progresses. This field elaborates on</p>
                        <textarea onChange={this.changeLearnStructure} />

                        <h4>Formalities</h4>
                        <p>Money and liabilities.</p>
                        <textarea onChange={this.changeFormalStructure} />

                        <input className="button" type="submit" value="Create" />
                    </div>
                    <div className="large-6 small-12 columns">
                        <h4>Details</h4>
                        Contract between the student
                        {this.props.student.profile.name} and the instructor
                        {this.props.instructor.profile.name}.
                    </div>
                </div>
            </form>)
    }
}

ContractNewForm.propTypes = {
    newContract : React.PropTypes.func,
    student : React.PropTypes.object,
    instructor : React.PropTypes.object
};

ContractNewForm.defaultProps = {};

const styles = {

};

export default Radium(ContractNewForm)
