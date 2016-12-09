import React from 'react';

export default class SignUpInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error : false,
            errorReason : "",
            mail : "",
            pass : "",
            name : ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.updateMail = this.updateMail.bind(this);
        this.updatePass = this.updatePass.bind(this);
        this.updateName = this.updateName.bind(this);
    }


    onSubmit(e){
        e.preventDefault();
        let that = this;
        //TODO: Create meteor user
        Accounts.createUser({
            profile : {
                name : this.state.name
            },
            email : this.state.mail,
            password : this.state.pass
        }, function(err){
            if(typeof err === 'undefined'){
                FlowRouter.go("dashboardApprenticeship");
            }else{
                that.setState({error : true, errorReason : err.reason})
                console.log(err);
            }
        });

        return 0;
    }

    updateMail(event){
        this.setState({mail: event.target.value, error: false});
    }

    updatePass(event){
        this.setState({pass: event.target.value, error: false});
    }

    updateName(event){
        this.setState({name: event.target.value, error: false});
    }

    render() {
        return (
            <div className="text-center">
                <form onSubmit={this.onSubmit}>
                    <div className={this.state.error ? "" : "hide"}>
                        <div className="medium-centered medium-10 columns">
                            <div className="callout alert">
                                {this.state.errorReason}
                            </div>
                        </div>
                    </div>
                    <input name="uname" type="text" placeholder="Name"
                        onChange={this.updateName} value={this.state.name}
                        className="entrypage-input" />
                    <input name="umail" type="text" placeholder="Email" onChange={this.updateMail} value={this.state.mail}
                        className="entrypage-input" />
                    <input name="upass" type="text" placeholder="Password" onChange={this.updatePass} value={this.state.pass}
                        className="entrypage-input" />
                    <input className="button success entrypage-submit" type="submit" value="Sign up" />
                </form>
            </div>
        )}
    };
