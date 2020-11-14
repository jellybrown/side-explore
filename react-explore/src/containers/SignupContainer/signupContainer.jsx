import React, { useRef, useState } from 'react';
import styles from './signupContainer.module.css';


const SignupContainer = (props) => {
    const [text, setText] = useState({
        email: '',
        password: '',
        password2: '',
        name: ''
    })

    const {email, password, password2, name } = text;

    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const onChange = (e) => {
        
        const name = e.target.name;
        const value = e.target.value;
       setText({
           ...text,
           [name] : value
        })

    if( name === 'email') {
        
        checkEmail(value);
    }

}
    const emailRef = useRef();
    const good = 'OK. Please write next information.';
    const bad = 'Please check your email.';
    const checkEmail = (value) => {
        const check = value && (regExp.test(value))? good: bad;
        check === bad ?  emailRef.current.style.fontWeight = 'bold': emailRef.current.style.fontWeight = 'normal' ;
        emailRef.current.innerText = check;
    }
    

    return (
        <section className={styles.container}>
            <h1 className={styles.tit}>Sign up</h1>
            <form className={styles.form}>
                <input name="email" value={email} placeholder="blog@email.com" onChange={(e) => onChange(e)} className={styles.email}/>
                <span ref={emailRef} className={styles.emailTxt}>Please check your email.</span>
                <input name="password" value={password} placeholder="password" onChange={onChange} className={styles.pw}/>
                <input name="password2" value={password2} placeholder="check your password." onChange={onChange} className={styles.pw2}/>
                <input name="name" value={name} placeholder="your name" onChange={onChange} className={styles.name}/>
                <div className={styles.btns}>
                 <button className={styles.male}>male</button>
                 <button className={styles.female}>female</button>
                </div>
                <button className={styles.vertify}>Vertify email address</button>
            </form>
        </section>
    )
};

export default SignupContainer;