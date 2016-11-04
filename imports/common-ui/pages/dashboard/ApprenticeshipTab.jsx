import React from 'react';

import Apply from '../../../features/apprenticeship/components/Apply/';

export default class ApprenticeshipTab extends React.Component {
    componentDidMount() {
        FlowRouter.withReplaceState(function() {
            FlowRouter.go("dashboardApprenticeship");
        });
    }
    render() {
        return (
            <Apply />
        )
    }
}
