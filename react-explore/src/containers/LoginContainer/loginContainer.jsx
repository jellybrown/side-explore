import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './loginContainer.css';

const LoginContainer = () => {


    return (
        <section className="login_page">
        <form>
            <div className="input_group">
                <span className="icon"><i className="fas fa-user"></i></span>
                <input type="email" placeholder="Email" id="email_input"/>
                <label htmlFor="email_input"></label>
            </div>
            <div className="input_group">
            <span className="icon"><i className="fas fa-lock"></i></span>
                <input type="password" placeholder="Password" id="pw_input"/>
                <label htmlFor="pw_input"></label>
            </div>
            <Link to="/join" className="sign_up">Sign up</Link>
            <button className="sign_in">Sign in</button>
        </form>
        </section>
    )
};

export default LoginContainer;
