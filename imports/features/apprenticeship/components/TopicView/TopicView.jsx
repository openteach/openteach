import React, { Component } from 'react';
import Radium from 'radium';
import MessageForm from '../MessageForm';
import Remarkable from 'remarkable';

class TopicView extends Component {

    constructor(props) {
        super(props);
        this.links = [];
    }

    findLinks(rawHTML){
        var doc = document.createElement("html");
        doc.innerHTML = rawHTML;
        var links = doc.getElementsByTagName("a")
        var urls = [];

        function uniq(a) {
            return a.sort().filter(function(item, pos, ary) {
                return !pos || item != ary[pos - 1];
            })
        }

        for (var i=0; i<links.length; i++) {
            urls.push(links[i].getAttribute("href"));
        }
        this.links = uniq(this.links.concat(urls));
    }

    renderMessageList() {
        let messages = this.props.messages;

        if(messages.length === 0)
            return (<div>No Messages</div>)

        return messages.map((m) => {
            let md = new Remarkable({
                linkify: true
            });
            let html = md.render(m.message);
            this.findLinks(html);
            return (<div className="row" key={m._id}>
                        <div className="card large-12 medium-12 small-12">
                            <div className="content">
                                <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                            </div>
                            <div className="action row">
                                <div className="large-8 small-8 columns"></div>
                                <div className="large-4 columns text-right pull-right">{m.authorName}</div>
                            </div>
                        </div>
                    </div>)
                });


    }

    renderMessageSection(){
        // Are we loading?
        if(this.props.loadingMsg){
            return (<div className="row">Loading</div>)
        }

        // Yes!
        const t = this.props.topic;
        return(
            <div>
                {this.renderMessageList()}
                <hr />
                <MessageForm topicId={t._id} />
            </div>
        )
    }

    renderTopic() {
        if(this.props.loadingTopic){
            return (<div className="row">Loading</div>)
        }

        const t = this.props.topic;
        let md = new Remarkable({
            linkify: true
        });
        let html = md.render(t.description);
        this.findLinks(html);
        const tags = t.tags.map((t, i) => (<a key={i}>{t}</a>))
        return (
            <div className="row">
                <div className="card large-12 medium-12 small-12 columns large-centered medium-centered">
                    <div className="content">
                        <span className="title">
                            {t.title}
                        </span>
                        <div className="markdown-body" dangerouslySetInnerHTML={ {__html: html} } />
                    </div>
                    <div className="action row">
                        <div className="large-8 small-8 columns">
                            {tags}
                        </div>
                        <div className="large-4 columns text-right pull-right">{t.authorName}</div>
                    </div>
                </div>
            </div>)
    }

    renderlinks(){
        return this.links.map((l) => {
            return <li key={l}><a href={l}>{l}</a></li>
        });
    }

    render() {
        return (
            <div className="row">
                <div className="large-8 columns">
                    {this.renderTopic()}
                    <hr />
                    {this.renderMessageSection()}
                </div>
                <div className="large-4 columns">
                    <h4>Resources</h4>
                    <p>This is the list of all links in this topic</p>
                    <ul>
                        {this.renderlinks()}
                    </ul>
                    <hr />
                    <h4>Actions</h4>
                    <ul>
                        <li><a>Edit</a></li>
                        <li><a>...</a></li>
                    </ul>
                </div>
            </div>)
    }
}

TopicView.propTypes = {
    topic : React.PropTypes.object,
    messages : React.PropTypes.array,
    loadingTopic : React.PropTypes.bool,
    loadingMsg : React.PropTypes.bool
};

TopicView.defaultProps = {};

export default Radium(TopicView)
