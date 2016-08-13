import React from 'react';
import { Courses } from '../../../imports/api/courses.js';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import { createContainer } from 'meteor/react-meteor-data';

export default class Course extends React.Component {
    renderLectureContent(){
        // Find course
        let cid = this.props.courseId;
        let course = Courses.findOne({_id : cid});

        // Find lecture
        let lid = this.props.lectureId;
        var lecture;
        if(lid){
            lecture = course.lectures[lid].content
        }
        else {
            lecture = course.index.content
        }

        // Parse the markdown part to HTML
        let md = new Remarkable();
        md.use(Meta);
        let html = md.render(lecture);

        // Generate the content
        return (
            <div dangerouslySetInnerHTML={ {__html: html} } />
        )
    }

    renderLectureList() {
        let cid = this.props.courseId;
        let lid = this.props.lectureId ? this.props.lectureId : 0;
        let course = Courses.findOne({_id : cid});

        return course.lectures.map((lecture, i) => {
            let href = FlowRouter.path("courseRoute", {
                courseId : course._id,
                lectureId : i + ""
            });
            return (
                <li key={i}>

                    <a href={href}>
                        {lecture.meta.title}
                    </a>

                </li>
            );
        });
    }

    render() {
        return(
            <div className="expanded">
                <div id="lecture-selector">

                    <div className="lectureList small-2 columns">

                        <ul className="lectureList__ul">

                            <p className="list__logo__text">
                                OpenTeach
                            </p>

                            <div className="list__logo">
                            </div>

                            {this.renderLectureList()}
                        </ul>

                    </div>

                    <div
                        id="lecture-content"
                        className="small-10 columns">
                        {this.renderLectureContent()}
                    </div>

                </div>
            </div>
        )
    }
}
