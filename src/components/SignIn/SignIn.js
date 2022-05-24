import './SignIn.css';

const SignIn = ({onRouteChange}) => {
    return (
        <article id="sign_in" className="br3 ba dark-gray b--black-10 mv5 w-100 w-50-m w-25-l center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
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

export default SignIn;