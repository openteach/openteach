import React, { Component } from 'react';
import Radium from 'radium';

import Apply from '../Apply/';

class ApprenticeshipTab extends Component {
    render() {
        return  <Apply />
    }
}

ApprenticeshipTab.propTypes = { };

ApprenticeshipTab.defaultProps = { };

export default Radium(ApprenticeshipTab)
