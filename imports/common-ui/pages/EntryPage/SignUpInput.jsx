import React from 'react';

export default class SignUpInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error : false,
            errorReason : ""
        }

        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(e){
        e.preventDefault();
        let that = this;
        //TODO: Create meteor user
        Accounts.createUser({
            profile : {
                name : e.target.uname.value
            },
            email : e.target.umail.value,
            password : e.target.upass.value
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

    render() {
        return (
            <div className="signUpInput text-center">
                <form onSubmit={this.onSubmit}>
                    <div className={this.state.error ? "" : "hide"}>
                        <div className="medium-centered medium-10 columns">
                            <div className="callout alert">
                                {this.state.errorReason}
                            </div>
                        </div>
                    </div>
                    <input name="uname" type="text" placeholder="Name" ref={(f) => {this._uname = f}} />
                    <input name="umail" type="text" placeholder="Email" ref={(f) => this._umail = f} />
                    <input name="upass" type="text" placeholder="Password" ref={(f) => this._upass = f} />
                    <input className="button success" type="submit" value="Sign up" />
                </form>
            </div>
        )}
    };
