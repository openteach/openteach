import React from 'react';

import ApprDashboard from '../../../features/apprenticeship/components/ApprDashboard/';

export default class ApprenticeshipTab extends React.Component {
    componentDidMount() {
        FlowRouter.withReplaceState(function() {
            FlowRouter.go("dashboardApprenticeship");
        });
    }
    render() {
        console.log(ApprDashboard);
        return (<div><ApprDashboard /></div>);
    }
}
