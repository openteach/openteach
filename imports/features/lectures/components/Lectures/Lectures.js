import React, { Component } from 'react';
import Radium from 'radium';

class Lectures extends Component {

  render() {
    return <div className="lectures__back">
            <div>
                <h5 className="text-center">
                    The lecture section is coming later
                </h5>
            </div>
            <div className="row text-center">
                <input
                    type="submit"
                    className="button success"
                    value="I want lectures"
                />
            </div>
        </div>
  }
}

// const styles = {
//   root: {
//     display: 'inline',
//   },
//   button: {
//     background: '#eee',
//     border: '1px solid #ddd',
//     fontSize: 24,
//   },
// };

Lectures.propTypes = {};

Lectures.defaultProps = {};

export default Radium(Lectures)
