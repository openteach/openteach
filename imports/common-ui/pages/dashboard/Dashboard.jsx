import React from 'react';
import Tabs from 'react-tabs-navigation';

import ApprenticeshipTab from './ApprenticeshipTab.jsx';
import CourseTab from './CourseTab.jsx';
import LecturesTab from './LecturesTab.jsx';
import ListBooks from '../../../features/book/components/ListBooks';

export default class Dashboard extends React.Component {
	getSelected(){
		return this.props.selected ? this.props.selected : 1;
	}

	render() {
		return(
			<div className="DashboardBackground" id="main-dashboard">
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
                                <CourseTab>{this.props.children ? this.props.children : <ListBooks /> }</CourseTab>
                            ),
                            displayName: 'Books'
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
