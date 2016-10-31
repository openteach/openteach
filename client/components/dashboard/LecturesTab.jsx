import React from 'react';

import Lectures from '../../../imports/features/lectures/components/Lectures/';

export default class LecturesTab extends React.Component {
    componentDidMount() {
        //FlowRouter.go("dashboardRoute", {show : 2});
    }

    render() {
        return <Lectures />
    }
}
