import React from 'react';
import Modal from 'react-modal';
import Radium from 'radium';

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pass : "",
        }

        this.updatePass = this.updatePass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updatePass(event){
        this.setState({pass: event.target.value, error: false});
    }

    onSubmit(e){
        e.preventDefault();
        Accounts.resetPassword(this.props.token, this.state.pass, function(err){
            console.log(err);
        })
    }

    render() {
        return(
            <div>
                <div className="row expanded">
                    <div>
                        <h5
                            className="large-2 small-4 column float-left"
                            style={styles.entrypageTitle}>
                            openTeach
                        </h5>
                    </div>
                    <div
                        className="large-2 small-4 column right text-right"
                        style={styles.githubLogo}>
                        <a href="https://github.com/openteach/openTeach">
                            <i className="fi-social-github white"></i>
                        </a>
                    </div>
                </div>

                <div className="row" style={styles.position}>
                    <div className="large-centered columns large-4 text-center">
                        <form onSubmit={this.onSubmit}>
                            <h4 className="white text-center"> Reset Password </h4>
                            <input type="password" placeholder="New Password" onChange={this.updatePass} value={this.state.pass} />

                            <input className="button success entrypage-submit" type="submit" value="Reset" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

ResetPassword.propTypes = {
    token : React.PropTypes.string
};

ResetPassword.defaultProps = {
    instructor : {
        name : "[instructor]"
    }
};

const styles = {
    position: {
        'marginTop': '5em'
    },
    entrypageTitle: {
        'color': '#fff',
        'fontSize': '2rem'
    },
    githubLogo: {
        'color': '#ccc',
        'fontSize': '2rem',
        // hover effect
        ':hover': {
            'color': '#fff'
        },
    }
}

export default Radium(ResetPassword)
