import React, { Component } from 'react';
import Radium from 'radium';
import MessageForm from '../MessageForm';
import Remarkable from 'remarkable';

class ConversationView extends Component {

    constructor(props) {
        super(props);
    }


    renderConversation() {
        if(this.props.loading){
            return (<div className="row">Loading</div>)
        }

        const c = this.props.conversation;
        let md = new Remarkable({
            linkify: true
        });
        let html = md.render(c.agenda);

        return (
            <div className="row">
                <div className="card large-12 medium-12 small-12 columns large-centered medium-centered">
                    <div className="content">
                        <span className="title">
                            {c.title}
                        </span>
                        <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                    </div>
                    <div className="action row">
                        <div className="large-8 small-8 columns">
                            <a>Tag A</a>, <a>Tag B</a>
                        </div>
                        <div className="large-4 columns text-right pull-right">Anything?</div>
                    </div>
                </div>
            </div>)
    }



    render() {
        return (
            <div className="row">
                <div className="large-8 columns">
                    {this.renderConversation()}
                </div>
                <div className="large-4 columns">
                    <h4>Actions</h4>
                    <ul>
                        <li><a>Propose Change</a></li>
                        <li><a>...</a></li>
                    </ul>
                </div>
            </div>)
    }
}

ConversationView.propTypes = {
    conversation : React.PropTypes.object,
    loading : React.PropTypes.bool,
};

ConversationView.defaultProps = {};

export default Radium(ConversationView)
