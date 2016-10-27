import React from 'react';

export default class Forbidden extends React.Component {
    render() {
        return (
            <div className="forbidden">
                <p className="forbidden__text">{this.props.text}</p>
                <h1 className="forbidden__headline">{this.props.headline}</h1>
                <p className="forbidden__tagline">{this.props.tagline}</p>
            </div>
        )
    }
}

Forbidden.propTypes = {
    text: React.PropTypes.string.isRequired,
    headline: React.PropTypes.string.isRequired,
    tagline: React.PropTypes.string.isRequired
}

Forbidden.defaultProps = {
    text: 'Ohh no... You are the forbidden place',
    headline: '403',
    tagline 'Hmmm... You are actually not susposed to be here?'
}
