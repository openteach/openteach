import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';

class LectureNewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description : "",
            title : "",
        }

        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeTitle(event) {this.setState({title: event.target.value});}
    changeDescription(event) {this.setState({description: event.target.value});}

    onSubmit(event) {
        event.preventDefault();

        let that = this;
        this.props.newLecture({
            title: this.state.title,
            description : this.state.description,
        }, (error, id) => {
            // Reset the form
            that.setState({
                title : "",
                description : "",
            });

            if(typeof error !== "undefined"){
                console.log(error);
                return;
            }

        });
    }

    render() {
        let md = new Remarkable();
        let html = md.render(this.state.description);
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="large-6 columns">
                        <h4>Title</h4>
                        <input type="text" placeholder="title" onChange={this.changeTitle} value={this.state.title} />
                        <h4>Description</h4>
                        <p>Concrete product that the instructor and teacher work on.</p>
                        <textarea onChange={this.changeDescription} style={styles.textarea} value={this.state.description} />
                        <input className="button" type="submit" value="Create" />
                    </div>
                    <div className="large-6 small-12 columns">
                        Preview
                    </div>
                </div>
            </form>)
    }
}

LectureNewForm.propTypes = {
    newLecture : React.PropTypes.func
};

LectureNewForm.defaultProps = {};

const styles = {
    textarea : {
        height: "150px"
    }
};

export default Radium(LectureNewForm)
