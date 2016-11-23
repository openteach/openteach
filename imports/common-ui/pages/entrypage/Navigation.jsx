import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return(
            <div>
                <div className="callout clearfix">

                    <h5 className="textLogo float-left">openTeach</h5>

                    <a href="https://github.com/openteach/openTeach" className="githubLogo float-right whiteText">
                        <i className="fi-social-github"></i>
                    </a>
                    
                </div>
            </div>
        )
    }
}
