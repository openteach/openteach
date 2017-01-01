import React, { Component } from 'react';
import Radium from 'radium';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';

// Mostly an architectual construction
class Entrypoint extends Component {
    render() {
        return (<this.props.component />);
    }
}
Entrypoint.propTypes = {
    component: React.PropTypes.func
};
Entrypoint.defaultProps = {};
export default Radium(Entrypoint);
