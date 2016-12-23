import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class OverlayMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes : "overlay-menu",
        }

        this.goSettings = this.goSettings.bind(this);
        this.goInstructor = this.goInstructor.bind(this);
        this.goHome = this.goHome.bind(this);
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

    goSettings(e){
        FlowRouter.go("settingsRoute");
        this.toggle(e);
    }

    goInstructor(e){
        FlowRouter.go("instructorRoute");
        this.toggle(e);
    }

    goHome(e){
        FlowRouter.go("dashboardBooks");
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

    instructor(){
        if(this.props.isInstructor)
            return (<li><a href="" onClick={this.goInstructor}>Instructor</a></li>);
        return;
    }

    render () {
        return (<nav role="navigation">
                    <ul id="menu" className={this.state.classes}>
                        <li><a href="" onClick={this.goHome}>Home</a></li>
                        {this.instructor()}
                        <li><a href="" onClick={this.goSettings}>Settings</a></li>
                        <li><a href="" onClick={this.logout}>Log Out</a></li>
                    </ul>
                    <a className="toggle-menu" ><i onClick={this.toggle} className="fi-widget"></i></a>
                </nav>);
    }
}

OverlayMenu.propTypes = {
    isInstructor : React.PropTypes.bool,
    isStudent : React.PropTypes.bool
};
