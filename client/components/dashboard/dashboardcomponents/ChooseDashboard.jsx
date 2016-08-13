import React from 'react';
import Tabs from 'react-tabs-navigation';
import ApprenticeshipTab from './ApprenticeshipTab.jsx';
import CourseTab from './CourseTab.jsx';
import LecturesTab from './LecturesTab.jsx';

export default class ChooseDashboard extends React.Component {
    render() {
        return (
            <div>

                <Tabs
                    selected={this.props.selected}
                    tabs={[
                        {
                            children: () => (
                                <ApprenticeshipTab />
                            ),
                            displayName: 'Apprenticeship'
                        }, {
                            children: () => (
                                <CourseTab />
                            ),
                            displayName: 'Courses'
                        }, {
                            children: () => (
                                <LecturesTab />
                            ),
                            displayName: 'Lectures'
                        }
                    ]}
                    />

            </div>
        )
    }
}
