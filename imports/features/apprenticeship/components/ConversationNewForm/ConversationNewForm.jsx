import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';
import ReactTags from 'react-tag-autocomplete';

class ConversationNewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : "",
            agenda : "\n* Item 1 \n* Item 2\n* ...\n",
            time : "",
            place : "",
            tags: [],
            suggestions: this.props.contract.tags.map(function(t, i){return {id : i, name : t}})
        }

        this.changeTitle = this.changeTitle.bind(this);
        this.changeAgenda = this.changeAgenda.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.changePlace = this.changePlace.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
    }

    handleDelete(i) {
        var tags = this.state.tags
        tags.splice(i, 1)
        this.setState({ tags: tags })
    }
    handleAddition(tag) {
        var tags = this.state.tags
        tags.push(tag)
        this.setState({ tags: tags })
    }

    changeTitle(event) {this.setState({title: event.target.value});}
    changeAgenda(event) {this.setState({agenda: event.target.value});}
    changeTime(event) {this.setState({time: event.target.value});}
    changePlace(event) {this.setState({place: event.target.value});}

    onSubmit(event) {
        event.preventDefault();
        let that = this;
        this.props.newConversation({
            title : this.state.title,
            agenda : this.state.agenda,
            time : this.state.time,
            place : this.state.place,
            tags : this.state.tags.map((t) => t.name),
            contractId : this.props.contract._id
        }, (error, result) => {
            if(error){
                console.log(error);
                return;
            }
            // Reset the form
            that.setState({
                title  : "",
                agenda : "\n* Item 1 \n* Item 2\n* ...\n",
                time : "",
                place : "",
                tags : []
            });
            FlowRouter.go("conversationRoute", {"id" : result._id})
        });
    }

    render() {
        const md = new Remarkable();
        const html = md.render(this.state.agenda);
        const tags = this.state.tags.map((t, i) => (<a key={i}>{t.name}</a>))
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <h1>New Conversation</h1>
                </div>
                <div  className="row">
                    <div className="large-6 columns">
                        <div className="large-12 columns">
                            <input type="text" placeholder="Title" onChange={this.changeTitle} value={this.state.title} />
                        </div>
                        <div className="large-12 columns">
                            <input type="text" placeholder="Time" onChange={this.changeTime} value={this.state.time} />
                        </div>
                        <div className="large-12 columns">
                            <input type="text" placeholder="Place" onChange={this.changePlace} value={this.state.place} />
                        </div>
                        <div className="large-12 columns">
                            <textarea placeholder="Conversation Agenda"
                                onChange={this.changeAgenda} value={this.state.agenda}
                                style={style.textarea}>

                            </textarea>
                        </div>
                        <div className="large-12 columns">
                            <ReactTags
                                tags={this.state.tags}
                                suggestions={this.state.suggestions}
                                handleDelete={this.handleDelete}
                                handleAddition={this.handleAddition}
                                allowNew={true} />
                        </div>
                        <div className="large-12 columns">
                            <input type="submit" value="Create" className="input button" />
                        </div>
                    </div>
                    <div className="large-6 columns">
                        <div className="card">
                            <div className="content">
                                <span className="title">
                                    {this.state.title}
                                </span>
                                <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                            </div>
                            <div className="action row">
                                <div className="large-8 small-8 columns">
                                    {tags}
                                </div>
                                <div className="large-4 columns text-right pull-right">{Meteor.user().profile.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>)
    }
}

ConversationNewForm.propTypes = {
    newConversation : React.PropTypes.func,
    contract : React.PropTypes.object
};

ConversationNewForm.defaultProps = {

};

const style = {
    textarea : {
        height : "200px"
    }
}

export default Radium(ConversationNewForm)
