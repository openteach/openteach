import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';

class ComponentDummy extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div></div>
        );
    }
}

ComponentDummy.propTypes = {};

ComponentDummy.defaultProps = {};

const styles = {};

export default Radium(ComponentDummy);
