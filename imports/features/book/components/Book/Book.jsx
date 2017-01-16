import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import Radium from 'radium';

class Book extends Component {
    renderChapterContent(){
        let book = this.props.book;

        // Find lecture
        let chapterId = this.props.currentChapter;
        var chapter;
        if(typeof chapterId !== 'undefined'){
            chapter = this.props.chapters.find(x => x.urlTitle == chapterId);
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
                <div className="row">
                    <div className="large-12 columns" style={styles}>{chapter.meta.title}</div>
                </div>
                <div className="row">
                    <div>{chapter.meta.tags}</div>
                    <div>{chapter.meta.difficulty}</div>
                </div>
                <div className="markdown-body row" dangerouslySetInnerHTML={ {__html: html} } />
            </div>)
    }

    renderChapterList() {
        let chapterId = this.props.currentChapter;
        let book = this.props.book;

        return this.props.chapters.map((chapter, i) => {
            let href = FlowRouter.path("bookRoute", {
                id : book.slug,
                chapterId : chapter.urlTitle
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
        if(this.props.loading)
            return (<div>Book is loading</div>)
        else
            return  (<div id="chapter-selector" className="row expanded">
                        <div className="chapterList small-2 large-2 columns chapterList__ul">
                            <p className="list__logo__text">
                                OpenTeach
                            </p>
                            <span className="list__logo"></span>
                            <ul>
                                {this.renderChapterList()}
                            </ul>
                        </div>
                        <div className="small-10 large-10 columns">
                            {this.renderChapterContent()}
                        </div>
                    </div>);
    }
}

Book.propTypes = {
    loading : React.PropTypes.bool,
    book : React.PropTypes.object,
    chapters: React.PropTypes.array,
    currentChapter : React.PropTypes.string
};

Book.defaultProps = {};

const styles = {
    'fontSize': '3rem',
    'fontWeight': 'bold'
}

export default Radium(Book)
