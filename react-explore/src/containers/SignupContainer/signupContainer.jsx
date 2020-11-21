import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './signupContainer.module.css';


const SignupContainer = ({setHeaderVisible}) => {

    useEffect(() => {
        setHeaderVisible(false);
    }, [setHeaderVisible]);

    const [text, setText] = useState({
        email: '',
        password: '',
        password2: '',
        name: ''
    })
    const [redLine, setRedLine] = useState(false);
    const {email, password, password2, name } = text;

    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const pwExp =  /^[a-z0-9_]{4,20}$/;
    const onChange = (e) => {
        
        const name = e.target.name;
        const value = e.target.value;
       setText({
           ...text,
           [name] : value
        })

    if( name === 'email') {
        checkValue(value, regExp, emailRef, eRef);
    }
    if( name === 'password') {
        checkValue(value, pwExp, pwRef, pRef);
        
    }
    if( name === 'password2') {
        checkValue(value, pwExp, pwRef, pRef2);
        
    }

}
    const emailRef = useRef();
    const pwRef = useRef();
    const eRef = useRef();
    const pRef = useRef();
    const pRef2 = useRef();


    const good = 'OK. Please write next information.';
    const bad = 'Please check your information.';
    
    const checkValue = (value, exp, currRef, styleRef) => {
        const check = value && (exp.test(value))? good : bad;
        check === bad ? setRedLine(true) : setRedLine(false);
        currRef.current.innerText = check;
        if(redLine === true) {
            styleRef.current.style.border = ` 1px solid red`;
            
           
        } else {
            styleRef.current.style.border = ` 1px solid #ddd`;
            console.log(styleRef);
            if(styleRef.current.name === 'password' || styleRef.current.name === 'password2') {
                
                const text = pRef.current.value ===  pRef2.current.value ?  `same password` :  `different password`;
                pwRef.current.innerText = text;
                
                
            }
            
        }
    }

    

    return (
        <section className={styles.signup}>
            <section className={styles.signupHeader}>
                <ul className={styles.header}>
                    <li className={styles.menu}>
                        <Link to="/">home</Link></li>
                    <li className={styles.menu}>
                    <Link to="login">login</Link></li>
                </ul>
            </section>
            <section className={styles.container}>
                <h1 className={styles.tit}>Sign up</h1>
                <form className={styles.form}>
                    <input ref={eRef} name="email" value={email} placeholder="blog@email.com" onChange={(e) => onChange(e)} className={styles.email}/>
                    <span ref={emailRef} className={styles.guideTxt}>Please check your email.</span>
                    <input ref={pRef} name="password" value={password} placeholder="password" onChange={onChange} className={styles.pw}/>
                    <input ref={pRef2} name="password2" value={password2} placeholder="check your password." onChange={onChange} className={styles.pw2}/>
                    <span ref={pwRef} className={styles.guideTxt}></span>
                    <input name="name" value={name} placeholder="your name" onChange={onChange} className={styles.name}/>
                    <div className={styles.radioBtns}>
                    <input name="radio" type="radio" id="male" checked="checked" />
                    <label htmlFor="male" className={styles.male}>male</label>
                    <input name="radio" type="radio" id="female"/>
                    <label htmlFor="female" className={styles.female}>female</label>
                    </div>
                    <button className={styles.vertify}>Vertify email address</button>
                </form>
            </section>
        </section>
    )
};

export default SignupContainer;