import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class OverlayMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes : "overlay-menu",
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        console.log(this.state.classes);
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
                        <li><a href="#">Log Out</a></li>
                    </ul>
                    <a className="toggle-menu" ><i onClick={this.onClick} className="fi-plus"></i></a>
                </nav>);
    }
}
