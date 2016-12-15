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
                                    <textarea
                                        className="large-12 small-12 columns"
                                        placeholder="Write your learning philosophy"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="large-12 columns">
                                <h4>Change password</h4>
                                <label>Current Password
                                    <input
                                        type="password"
                                        placeholder="Type old password"
                                    />
                                <a href="#">
                                    <small>Restore old password
                                        <span
                                            data-tooltip aria-haspopup="true"
                                            className="has-tip"
                                            data-disable-hover="false"
                                            tabindex="1" title="Receive your old password
                                        ">&nbsp;&#63;&nbsp;
                                        </span>
                                    </small>
                                </a>
                                </label>
                                <label>New Password
                                    <input
                                        type="password"
                                        placeholder="Type new password"
                                    />
                                </label>
                                <label>New Password again
                                    <input
                                        type="password"
                                        placeholder="Retype new password"
                                    />
                                </label>

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
