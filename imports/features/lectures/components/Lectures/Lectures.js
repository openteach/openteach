import React, { Component } from 'react';
import Radium from 'radium';

class Lectures extends Component {

  render() {
    return <div className="lectures">
            <div className="expanded row">
                <h5 className="coming-soon__headline">
                    The lecture section is coming later
                </h5>
            </div>
            <div className="expanded row lecture__btn--apply">
                <input
                    type="submit"
                    className="apply__btn"
                    value="I want lectures"
                />
            </div>
        </div>
  }
}

const styles = {
  root: {
    display: 'inline',
  },
  button: {
    background: '#eee',
    border: '1px solid #ddd',
    fontSize: 24,
  },
};

Lectures.propTypes = {};

Lectures.defaultProps = {};

export default Radium(Lectures)
