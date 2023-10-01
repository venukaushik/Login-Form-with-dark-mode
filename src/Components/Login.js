import React from 'react'

function Login(props) {
    return (
        <div className="app" data-theme={props.mode}>
            <div className="login">
                <h1>Login</h1>
                <div className="container">
                    <div className="top">
                        <i className="fab fa-google"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-github-square"></i>
                    </div>
                    <p className="divider"><span>Or</span></p>
                    <form>
                        <label>E-mail</label>
                        <input type="email" placeholder='Enter your email' />
                        <label>Password</label>
                        <input type="password" placeholder='Enter your password' />

                        <div className="remember">
                            <input type="checkbox" name="remember" id="remember" />
                            <label>Remember Me</label>
                        </div>

                        <button>Log In</button>

                    </form>

                    <div className="bottom">
                        <p>Forgot your password?</p>
                        <a href="/">Reset Password</a>
                    </div>

                    <p className="create">Create Account</p>
                </div>

                <div className="theme-toggle">
                    <h2>{props.modeText} Theme</h2>
                    <i onClick={props.toggleTheme} className={props.modeIcon} ></i>
                </div>
            </div>
        </div >
    )
}

export default Login