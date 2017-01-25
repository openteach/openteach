import React, { Component } from 'react';
import Radium from 'radium';

class LecturesTab extends Component {
    render() {
        return (<div className="lectures__back">
            <div className="expanded row text-center app-header">
                <div className="large-12 columns">
                    <h1>Teachers lectures</h1>
                    <p>Teachers public lectures</p>
                </div>
            </div>
            <div className="row text-center">
                <input
                    type="submit"
                    className="button success"
                    value="I want lectures"
                />
            </div>
        </div>);
  }
}

LecturesTab.propTypes = {};

LecturesTab.defaultProps = {};

const styles = {};

export default Radium(LecturesTab)
