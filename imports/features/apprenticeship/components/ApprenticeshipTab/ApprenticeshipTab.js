import React, { Component } from 'react';
import Radium from 'radium';

import Apply from '../Apply/';
import ApprDashboard from '../ApprDashboard/';

class ApprenticeshipTab extends Component {
    componentDidMount() {
        FlowRouter.withReplaceState(function() {
            FlowRouter.go("dashboardApprenticeship");
        });
    }
    render() {
        return  this.props.children ? this.props.children : <ApprDashboard />
    }
}

ApprenticeshipTab.propTypes = { };

ApprenticeshipTab.defaultProps = { };

export default Radium(ApprenticeshipTab)
