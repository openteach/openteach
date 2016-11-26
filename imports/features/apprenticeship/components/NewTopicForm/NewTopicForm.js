import React, { Component } from 'react';
import Radium from 'radium';

class NewTopicForm extends Component {
  render() {
    return (
        <div  className="row">
            <form>
                <div class="large-12-columns">
                    <input type="text" placeholder="Title" />
                </div>
                <div class="large-12-columns">
                    <textarea placeholder="Topic Content" />
                </div>
            </form>
        </div>)
  }
}

NewTopicForm.propTypes = {};

NewTopicForm.defaultProps = {};

export default Radium(NewTopicForm)
