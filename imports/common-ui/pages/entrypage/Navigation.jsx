import React from 'react';

export default class Navigation extends React.Component {
	render() {
		return(
				<div className="callout clearfix">

					<h5 className="textLogo float-left">openTeach</h5>

					<a
						href="https://github.com/openteach/openTeach"
						target="_blank">
							<i
								className="whiteText githubLogo fa fa-github fa-2x float-right"
								aria-hidden="true">
							</i>
					</a>

				</div>
		)
	}
}
