import React from 'react';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="notFound">
                <h1 className="notFound__headline">{this.props.headline}</h1>
            </div>
        )
    }
}

NotFound.propTypes = {
    headline: React.PropTypes.string.isRequired
}

NotFound.defaultProps = {
    headline: 'Ohh... 404 = not found'
}
