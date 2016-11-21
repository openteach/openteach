import React from 'react';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="text-center">
                <p>{this.props.text}</p>
                <h1>{this.props.headline}</h1>
                <p>{this.props.tagline}</p>
            </div>
        )
    }
}

NotFound.propTypes = {
    text: React.PropTypes.string.isRequired,
    headline: React.PropTypes.string.isRequired,
    tagline: React.PropTypes.string.isRequired
}

NotFound.defaultProps = {
    text: 'Ohh no... Not found',
    headline: '404',
    tagline: 'Go back and learn something usefull :-)'
}
