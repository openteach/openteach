import React from 'react';

import ChooseDashboard from './dashboardcomponents/ChooseDashboard.jsx';

export default class Dashboard extends React.Component {
	getSelected(){
		return this.props.selected ? this.props.selected : 1;
	}

	render() {
		return(
			<div>
				<ChooseDashboard selected={this.getSelected()} />
			</div>
		)
	}
}
