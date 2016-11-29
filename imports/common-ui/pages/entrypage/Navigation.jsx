import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return(
            <div>
                <div className="callout clearfix">

                    <h5 className="textLogo float-left whiteText">openTeach</h5>

                    <a href="https://github.com/openteach/openTeach" className="githubLogo float-right whiteText">
                        <i className="githubLogo__text fi-social-github whiteText">GitHub</i>
                    </a>

                </div>
            </div>
        )
    }
}
