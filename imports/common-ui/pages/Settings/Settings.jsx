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
            </div>
        )
    }
}

Settings.propTypes = {
};

Settings.defaultProps = {
};

export default Radium(Settings)
