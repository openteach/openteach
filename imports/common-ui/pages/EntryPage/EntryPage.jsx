import React from 'react';

import SignUpInput from './SignUpInput.jsx';
import SignInInput from './SignInInput.jsx';

export default class Entrypage extends React.Component {
    render() {
        return(
            <div className="entrypage__back">
                <div>
                    <div className="clearfix">
                        <h5 className="textLogo float-left whiteText">openTeach</h5>
                        <a href="https://github.com/openteach/openTeach" className="githubLogo float-right whiteText">
                            <i className="githubLogo__text fi-social-github whiteText">GitHub</i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="large-centered columns large-4">
                        <h4 className="contentHeading text-center whiteText">
                            Learn with [name of teacher]
                        </h4>
                        <p className="text-center whiteText">
                            Providing the conditions for you to learn
                        </p>
                        <SignUpInput />
                        <SignInInput />
                    </div>
                </div>
                <div className="text-center">
                    <p>
                        Powered by <strong>NextAdept</strong> 2016
                    </p>
                </div>

            </div>
        )
    }
}
