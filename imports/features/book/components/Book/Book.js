import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import Radium from 'radium';

class Book extends Component {
    renderChapterContent(){
        let book = this.props.book;

        // Find lecture
        let chapterId = this.props.chapterIdx;
        var chapter;
        if(typeof chapterId !== 'undefined'){
            chapter = this.props.chapters[chapterId]
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
        let chapterId = this.props.chapterIdx;
        let book = this.props.book;

        return this.props.chapters.map((chapter, i) => {
            let href = FlowRouter.path("bookRoute", {
                id : book.urlTitle,
                chapterId : i + ""
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
    book : React.PropTypes.object,
    chapters: React.PropTypes.array,
    chapterIdx : React.PropTypes.number
};

Book.defaultProps = {};

export default Radium(Book)
