import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import Radium from 'radium';

class BookTab extends Component {
    render() {
        return (
            <div className="dashboard">
                {this.props.children}
            </div>
        )
    }
}

BookTab.propTypes = {
    children : React.PropTypes.object,
};

BookTab.defaultProps = {};

export default Radium(BookTab)
