import React, { Component } from 'react';
import Radium from 'radium';

class Apply extends Component {

    constructor(props) {
        super(props);
        this.state = {
            application : Meteor.user().profile.application ? Meteor.user().profile.application :  "",
            success : false
        }

        this.changeApplication = this.changeApplication.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        let that = this;
        this.props.editApplication({
            application: this.state.application
        }, (error, result) => {
            // Reset the form
            that.setState({
                success : true
            });

            if(typeof error !== "undefined"){
                console.log(error);
                return;
            }
        });
    }

    changeApplication(event){ this.setState({application: event.target.value});}

    render() {
        return (
            <div>
                <div className="expanded row text-center app-header">
                    <div className="large-12 columns">
                        <h1>Apprenticeship</h1>
                        <p>This is where your Apprenticeship starts</p>
                    </div>
                </div>
                <div className="row apprenticeship__content">
                    <div className="small-6 columns">
                        <h4>Apprenticeship Information</h4>
                        <p className="text-justify">
                            The word apprenticeship comes from the Old French
                            aprentiz meaning "someone learning" and the Anglian
                            suffix -scip, meaning "state, condition of being."
                            An apprenticeship is when someone is in a state or
                            condition of learning from a master in a field. Some
                            professions even have apprenticeship programs like
                            the International Brotherhood of Electrical Workers
                            where you can be assigned to apprentice, or study
                            under a professional electrician.
                            <br/>
                            <br/>
                            <blockqoute>
                                <i>Source: </i>
                                <a
                                    href="https://www.vocabulary.com/dictionary/apprenticeship"
                                    target="_blank">
                                    Vocabulary.com
                                </a>
                            </blockqoute>
                        </p>
                    </div>
                <div className="small-6 columns">
                    <h4>Your Motivation</h4>
                    <div className={this.state.success ? "" : "hide"}>
                        <div className="medium-centered medium-10 columns">
                            <div className="callout success">
                                Thanks for the application. We will return
                                shortly
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <textarea
                            className="apprenticeship__textarea"
                            onChange={this.changeApplication}
                            value={this.state.application}
                            style={styles.textarea}
                            placeholder="Please write your motivation here...">
                        </textarea>
                        <input
                            type="submit"
                            className="button success"
                            value="Apply"
                            onClick={this.onSubmit} />
                    </form>
                </div>
        </div>
        </div>
    )}
}

Apply.propTypes = {
    editApplication: React.PropTypes.func,
};

Apply.defaultProps = {};

const styles = {
    textarea : {
        height : "200px"
    }
}

export default Radium(Apply)
