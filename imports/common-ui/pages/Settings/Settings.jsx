import React from 'react';
import Radium from 'radium';

class Settings extends React.Component {

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
                                    <input type="text" placeholder="Name" />
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="large-12 columns">
                                <label>Learning Philosophy
                                    <textarea className="large-12 small-12 columns" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="large-6 small-12 columns">
                        <h2>Learning Philosophy</h2>
                        The learning philosophy is your way of telling you
                        instructor how you learn in the best way.
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
