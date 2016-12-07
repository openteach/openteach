import React, { Component } from 'react';
import Radium from 'radium';

import Apply from '../Apply/';

class ApprenticeshipTab extends Component {
    componentDidMount() {
        FlowRouter.withReplaceState(function() {
            FlowRouter.go("dashboardApprenticeship");
        });
    }
    render() {
        return  <Apply />
    }
}

ApprenticeshipTab.propTypes = { };

ApprenticeshipTab.defaultProps = { };

export default Radium(ApprenticeshipTab)
