import React from 'react';

export default class ApprenticeshipTab extends React.Component {
    componentDidMount() {
        FlowRouter.go("dashboardRoute", {show : "0"});
    }
    render() {
        return (
            <div className="apprenticeship expanded row">
                {/* This is the foundation className for fluid container grid */}
                    {/* 1. grid */}
                    <div className="small-6 columns apprenticeship--information">
                        {/* Headline for Apprenticeship Information */}
                        <h4 className="apprenticeship--headline">
                            Apprenticeship Information
                        </h4>
                        {/* Description of apprenticeship */}
                        <p className="apprenticeship--informationtext">
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
                    <div className="small-6 columns apprenticeship--motivation">
                        {/* Headline for Apprenticeship Motivation */}
                        <h4 className="apprenticeship--headline">
                            Your Motivation
                        </h4>
                        {/* Textarea for motivation for an apprenticeship */}
                        <textarea
                            placeholder="Please write your motivation here...">
                        </textarea>
                        {/* Green Btn to Apply for Apprenticeship */}
                        <input
                            type="submit"
                            className="apply__btn"
                            value="Apply"
                            />
                    </div>
            </div>
        )
    }
}
