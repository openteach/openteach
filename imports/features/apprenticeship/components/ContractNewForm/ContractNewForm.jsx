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
            formalStructure : "",
            title : "",
        }

        this.changeGoals = this.changeGoals.bind(this);
        this.changeLearnStructure = this.changeLearnStructure.bind(this);
        this.changeFormalStructure = this.changeFormalStructure.bind(this);
        this.changeTitle = this.changeTitle.bind(this);

        this.changeGoals = this.changeGoals.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeGoals(event) {this.setState({contractGoals: event.target.value});}
    changeLearnStructure(event) {this.setState({learningStructure: event.target.value});}
    changeFormalStructure(event) {this.setState({formalStructure: event.target.value});}
    changeTitle(event) {this.setState({title: event.target.value});}

    onSubmit(event) {
        event.preventDefault();

        console.log(this.props.student);
        console.log(this.props.instructor);

        let that = this;
        this.props.newContract({
            contractGoals: this.state.contractGoals,
            learningStructure : this.state.learningStructure,
            formalStructure : this.state.formalStructure,
            studentId : this.props.student._id,
            instructorId : this.props.instructor._id,
            title : this.state.title
        }, (error, result) => {
            // Reset the form
            that.setState({
                frameAndGoal : "",
                structure : "",
                formalStructure : "",
                title : ""
            });

            if(typeof error !== "undefined"){
                console.log("An error happened:")
                console.log(error);
                return;
            }

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
                    <div className="large-6 columns">
                        <h4>Title</h4>
                        <input type="text" placeholder="title" onChange={this.changeTitle} />
                    </div>
                </div>
                <div className="row">
                    <div className="large-6 small-12 columns">
                        <h4>Goals</h4>
                        <p>Concrete product that the instructor and teacher work on.</p>
                        <textarea onChange={this.changeGoals} style={styles.textarea} />

                        <h4>Frame</h4>
                        <p>How the teaching will carry on.</p>
                        <textarea onChange={this.changeLearnStructure} style={styles.textarea} />
                    </div>
                    <div className="large-6 small-12 columns">
                        <h4>Formalities</h4>
                        <p>Money and liabilities.</p>
                        <textarea onChange={this.changeFormalStructure} style={styles.textarea} />

                        <h4>Details</h4>
                        Contract between the student
                        {this.props.student.profile.name} and the instructor
                        {this.props.instructor.profile.name}.

                        <input className="button" type="submit" value="Create" />
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
    textarea : {
        height: "150px"
    }
};

export default Radium(ContractNewForm)
