
import React from 'react';

import SignUpInput from './SignUpInput.jsx';
import SignInInput from './SignInInput.jsx';

export default class mainContent extends React.Component {
	render() {
		return(
				<div className="row">

					    <div className="large-centered columns large-4">

							<h4 className="contentHeading text-center">
								Learn with [name of teacher]
							</h4>

							<p className="text-center">
								Providing the conditions for you to learn
							</p>

							<SignUpInput />

							<SignInInput />
					    </div>

				</div>
		)
	}
}
