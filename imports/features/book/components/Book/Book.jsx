import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Meta from 'remarkable-meta';
import Radium from 'radium';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';

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
                    <div className="large-12 columns" style={styles.headline}>{chapter.meta.title}</div>
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

    componentWillMount() {
    // sets the initial state of the offcanvas menu
        this.setState({
            isMenuOpened: false
        })
    }

    handleClick() {
      // toggles the menu opened state for the offcanvas menu
      this.setState({ isMenuOpened: !this.state.isMenuOpened });
    }

    render() {
        if(this.props.loading)
            return (<div>Book is loading</div>)
        else
            return  (
                <div id="chapter-selector" className="row expanded">
                    {/*
                    <div className="expanded row text-center app-header">
                        <div className="large-12 columns">
                            <h1>Apprenticeship</h1>
                            <p>Apprenticeship training</p>
                        </div>
                    </div>
                    */}
                    <OffCanvas width={250} transitionDuration={250} isMenuOpened={this.state.isMenuOpened} position={"left"}>
                        <OffCanvasBody className={styles.bodyClass}>
                            <a><i onClick={this.handleClick.bind(this)} className="fi-indent-more" style={styles.toggleIcon}></i></a>
                            <div className="expanded row text-center app-header">
                                <div className="large-12 columns">
                                    <h1>Apprenticeship</h1>
                                    <p>Apprenticeship training</p>
                                </div>
                            </div>
                            <div className="small-12 large-12 columns">
                                {this.renderChapterContent()}
                            </div>
                        </OffCanvasBody>
                        <OffCanvasMenu className={styles.menuClass}>
                            <div className="chapterList small-12 large-12 columns chapterList__ul">
                                <p className="list__logo__text" style={styles.menuLogo}>OpenTeach</p>
                                <ul style={styles.listMenu}>
                                    {this.renderChapterList()}
                                    <li><a onClick={this.handleClick.bind(this)}>Close menu</a></li>
                                </ul>
                            </div>
                        </OffCanvasMenu>
                    </OffCanvas>

                </div>
            );
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
    headline: {
        'fontSize': '3rem',
        'fontWeight': 'bold',
    },
    bodyClass: {

    },
    toggleIcon: {
        'fontSize': '1.5em',
        'marginLeft': '1.7em',
        'position': 'absolute'
    },
    menuClass: {

    },
    menuLogo: {
        'paddingTop': '4em'
    },
    listMenu: {
        'listStyle': 'none'
    }
}

export default Radium(Book)
