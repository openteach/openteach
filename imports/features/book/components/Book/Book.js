import React, { Component } from 'react';
import { Book as BookClass } from '../../../../collections/books.js';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import Radium from 'radium';

class Book extends Component {
    renderChapterContent(){
        // Find course
        let bId = this.props.courseId;
        let book = BookClass.findOne({_id : bId});

        // Find lecture
        let chapterId = this.props.lectureId;
        var chapter;
        if(chapterId){
            chapter = book.chapters[chapterId]
        }
        else {
            chapter = book.index
        }

        // Parse the markdown part to HTML
        let md = new Remarkable();
        md.use(Meta);
        let html = md.render(chapter.content);

        // Generate the content
        return (
            <div>
                <div id="chapterTitle">{chapter.meta.title}</div>
                <div id="chapterSection">
                    <div>{chapter.meta.tags}</div>
                    <div>{chapter.meta.difficulty}</div>
                    <div dangerouslySetInnerHTML={ {__html: html} } /></div>
                </div>
        )
    }

    renderChapterList() {
        let bookId = this.props.courseId;
        let chapterId = this.props.lectureId ? this.props.lectureId : 0;
        let book = BookClass.findOne({_id : bookId});

        return book.chapters.map((chapter, i) => {
            let href = FlowRouter.path("courseRoute", {
                courseId : book._id,
                lectureId : i + ""
            });
            return (
                <li key={i}>

                    <a href={href}>
                        {chapter.meta.title}
                    </a>

                </li>
            );
        });
    }
  render() {
    return  <div className="expanded" className="DashboardBackground">
                <div id="chapter-selector">
                    <div className="chapterList small-2 columns">

                            <ul className="chapterList__ul">

                                <p className="list__logo__text">
                                    OpenTeach
                                </p>

                                <span className="list__logo">
                                </span>

                                {this.renderChapterList()}
                            </ul>

                        </div>

                        <div
                            id="chapter-content"
                            className="small-10 columns">
                            {this.renderChapterContent()}
                        </div>

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

Book.propTypes = {
    lectureId : React.PropTypes.string,
    courseId: React.PropTypes.string
};

Book.defaultProps = {};

export default Radium(Book)
