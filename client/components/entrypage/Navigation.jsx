import React from 'react';

export default class navigation extends React.Component {
	render() {
		return(
				<div className="navigation">

					<h5 className="navigation__logo">openTeach</h5>

					<ul>

						<li>
							<a
								href="https://github.com/openteach/openTeach"
								target="_blank">
								<i
									className="fa fa-github fa-2x"
									aria-hidden="true">
								</i> GitHub
							</a>
						</li>

					</ul>

				</div>
		)
	}
}
