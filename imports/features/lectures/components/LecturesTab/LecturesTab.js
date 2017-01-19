import React, { Component } from 'react';
import Radium from 'radium';

class LecturesTab extends Component {
    render() {
        return (
            <div className="dashboard">
                {this.props.children}
            </div>);
  }
}

LecturesTab.propTypes = {};

LecturesTab.defaultProps = {};

export default Radium(LecturesTab)
