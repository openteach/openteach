import React from 'react';

import SignUpInput from './SignUpInput.jsx';
import SignInInput from './SignInInput.jsx';
import UnvAccounts from './UnvAccounts.jsx'

export default class Entrypage extends React.Component {
    render() {
        return(
            <div>
                <div className="row expanded">
                    <div>
                        <h5 className="large-2 column float-left" id="entrypage-title">openTeach</h5>
                    </div>
                    <div className="large-2 column right text-right" id="github-logo">
                        <a href="https://github.com/openteach/openTeach">
                            <i className="fi-social-github white">GitHub</i>
                        </a>
                    </div>
                </div>

                <div className="row" id="entrypage-main-row">
                    <div className="large-centered columns large-4">
                        <h4 className="white text-center"> Learn with {this.props.instructor.name} </h4>
                        <SignUpInput />
                        <SignInInput />
                    </div>
                </div>
            </div>
        )
    }
}

Entrypage.propTypes = {
    instructor : React.PropTypes.object
};

Entrypage.defaultProps = {
    instructor : {
        name : "[instructor]"
    }
};
