import { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor(props) {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }).then(res => res.json())
        .then(data => {
            if (data === 'success') {
                this.props.onRouteChange('home');
            }
        })
        
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article id="sign_in" className="br3 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                onChange={this.onEmailChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                onChange={this.onPasswordChange}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <a onClick={() => onRouteChange('register')} href="#0" className="f6 dim white db">Register</a>
                            <a href="#0" className="f6 link dim white db">Forgot your password?</a>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;