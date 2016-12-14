import React from 'react';
import Radium from 'radium';

class Settings extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="text-center">
                    <h1>Settings</h1>
                </div>
                <div className="row">
                    <div className="large-6 small-12 columns">
                        <div className="row">
                            <div className="large-12 columns">
                                <h4>General</h4>
                                <label>Name
                                    <input type="text" placeholder="Name" />
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="large-12 columns">
                                <label>Learning Philosophy
                                    <textarea className="large-12 small-12 columns" />
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="large-12 columns">
                                <h4>Change password</h4>
                            </div>
                        </div>
                    </div>
                    <div className="large-6 small-12 columns">
                        <h4>Learning Philosophy</h4>
                        <p>
                            The learning philosophy is your way of telling you
                            instructor how you learn in the best way.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

Settings.propTypes = {
};

Settings.defaultProps = {
};

export default Radium(Settings)
