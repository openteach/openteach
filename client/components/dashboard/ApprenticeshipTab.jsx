import React from 'react';

import Apply from '../../../imports/features/apprenticeship/components/Apply/';

export default class ApprenticeshipTab extends React.Component {
    componentDidMount() {
        FlowRouter.go("dashboardRoute", {show : "0"});
    }
    render() {
        return (
            <Apply />
        )
    }
}
