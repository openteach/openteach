import React from 'react';

import SignUpInput from './SignUpInput.jsx';
import SignInInput from './SignInInput.jsx';

export default class mainContent extends React.Component {
	render() {
		return(
				<div className="mainContent">

					<h4 className="mainHeading">
						Learn with [teachername],
					</h4>

					<p className="mainContent__subtext">
						who are providing the conditions for you to learn
					</p>

					<SignUpInput />

					<SignInInput />

				</div>
		)
	}
}
