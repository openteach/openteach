import React, { Component } from 'react';
import Radium from 'radium';

class Apply extends Component {
  render() {
    return <div className="row apprenticeship__content">
        {/* This is the foundation className for fluid container grid */}
            {/* 1. grid */}
            <div className="small-6 columns">
                {/* Headline for Apprenticeship Information */}
                <h4>Apprenticeship Information</h4>
                {/* Description of apprenticeship */}
                <p className="text-justify">
                    The word apprenticeship comes from the Old French
                    aprentiz meaning "someone learning" and the Anglian
                    suffix -scip, meaning "state, condition of being."
                    An apprenticeship is when someone is in a state or
                    condition of learning from a master in a field. Some
                    professions even have apprenticeship programs like
                    the International Brotherhood of Electrical Workers
                    where you can be assigned to apprentice, or study
                    under a professional electrician.
                    <br/>
                    <br/>
                    <blockqoute>
                        <i>Source:  </i>
                        <a
                            href="https://www.vocabulary.com/dictionary/apprenticeship"
                            target="_blank">
                            Vocabulary.com
                        </a>
                    </blockqoute>
                </p>

            </div>
            {/* 2. Grid */}
            <div className="small-6 columns">
                {/* Headline for Apprenticeship Motivation */}
                <h4>Your Motivation</h4>
                {/* Textarea for motivation for an apprenticeship */}
                <textarea
                    className="apprenticeship__textarea"
                    placeholder="Please write your motivation here...">
                </textarea>
                {/* Green Btn to Apply for Apprenticeship */}
                <input
                    type="submit"
                    className="button success"
                    value="Apply"
                    />
            </div>
    </div>
  }
}

Apply.propTypes = {};

Apply.defaultProps = {};

const styles = {}

export default Radium(Apply)
