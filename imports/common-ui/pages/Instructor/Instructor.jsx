import React from 'react';
import Radium from 'radium';

class Instructor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Settings</h1>
                <div className="row">
                    <div className="large-6 small-12 columns">
                        <h2>General</h2>
                        <div class="row">
                            <div class="large-12 columns">
                                <label>Name
                                    <input type="text" value="[Instructor Name]" disabled />
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="large-12 columns">
                                <label>Teaching Philosophy
                                    <textarea className="large-12 small-12 columns" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="large-6 small-12 columns">
                        <h2>Teaching Philosophy</h2>
                        <p>...</p>
                        <h2>GitHub</h2>
                        <p>Most of your settings are stored in github</p>
                    </div>
                </div>
            </div>
        )
    }
}

Instructor.propTypes = {
};

Instructor.defaultProps = {
};

export default Radium(Instructor)
