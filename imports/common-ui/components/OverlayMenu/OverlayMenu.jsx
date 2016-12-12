import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class OverlayMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes : "overlay-menu",
        }
        this.settings = this.settings.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    logout(event){
        Meteor.logout(function(err) {
            if(!!err){
                console.log("Logout failed");
            } else {
                FlowRouter.go("indexRoute");
            }
        });
    }

    settings(e){
        FlowRouter.go("settingsRoute");
        this.toggle(e);
    }

    toggle(event){
        if(this.state.classes === "overlay-menu") {
            this.setState({classes : "overlay-menu is-open"});
        }
        else {
            this.setState({classes : "overlay-menu"});
        }
    }


    render () {
        return (<nav role="navigation">
                    <ul id="menu" className={this.state.classes}>
                        <li><a href="" onClick={this.settings}>Settings</a></li>
                        <li><a href="" onClick={this.logout}>Log Out</a></li>
                    </ul>
                    <a className="toggle-menu" ><i onClick={this.toggle} className="fi-widget"></i></a>
                </nav>);
    }
}
