import React, { Component } from 'react';
import Radium from 'radium';

class TopicList extends Component {
  render() {
    return (
        <div  className="row">
            Her er en lsite.
        </div>)
  }
}

TopicList.propTypes = {};

TopicList.defaultProps = {};

export default Radium(TopicList)
