import React, { Component } from 'react';
import Radium from 'radium';

class ConversationNewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : "",
            agenda : ""
        }

        this.changeTitle = this.changeTitle.bind(this);
        this.changeAgenda = this.changeAgenda.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeTitle(event) {this.setState({title: event.target.value});}
    changeAgenda(event) {this.setState({agenda: event.target.value});}

    onSubmit(event) {
        event.preventDefault();
        let that = this;
        this.props.newConversation({
            title : this.state.title,
            agenda : this.state.agenda,
            contractId : this.props.contract._id
        }, (error, result) => {
            if(error){
                console.log(error);
                return;
            }
            // Reset the form
            that.setState({
                title  : "",
                agenda : ""
            });

        });
    }

    render() {
        return (
            <div  className="row">
                <form onSubmit={this.onSubmit} action="">
                    <div className="large-12 columns">
                        <input type="text" placeholder="Title" onChange={this.changeTitle} value={this.state.title} />
                    </div>
                    <div className="large-12 columns">
                        <textarea placeholder="Conversation Agenda" onChange={this.changeAgenda} value={this.state.agenda}></textarea>
                    </div>
                    <div className="large-12 columns">
                        <input type="submit" value="Create" className="input button" />
                    </div>
                </form>
            </div>)
    }
}

ConversationNewForm.propTypes = {
    newConversation : React.PropTypes.func,
    contract : React.PropTypes.object
};

ConversationNewForm.defaultProps = {};

export default Radium(ConversationNewForm)
