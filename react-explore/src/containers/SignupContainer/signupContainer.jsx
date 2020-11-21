import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './signupContainer.module.css';


const SignupContainer = () => {

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


    let result = null;
    const emailRef = useRef();
    const pwRef = useRef();
    const eRef = useRef();
    const pRef = useRef();
    const pRef2 = useRef();



    const onChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

       setText({
           ...text,
           [name] : value
        })

        inputCheck(value, name);
        if(name === 'email') {
            changeStyles(eRef) ;
            emailRef.current.innerText = result;
            
        } else {
            changeStyles(pRef);
            changeStyles(pRef2);
            pwRef.current.innerText = result;
            
        }

}

  



    const good = 'OK. Please write next information.';
    const bad = 'Please check your information.';

 

    const inputCheck = (value, currRef) => {
        if(!value) {
            return;
        } else {
            const current = currRef;
            
            switch (current) {
                case 'email' : 
                    result = regExp.test(value) ? good : bad;
                    break;
                case 'password' :
                    result = pwExp.test(value) ? good : bad;
                    break;
                case 'password2' :
                    result = pwExp.test(value) ? good : bad;
                    break;
                default: 
                    result = bad;
            }
            result === good ? setRedLine(false) : setRedLine(true);
        }
    }

    const changeStyles = (styleRef) => {
        
        if(redLine) {
            styleRef.current.style.border = '1px solid red';
        } else {
            styleRef.current.style.border = '1px solid #ddd';
        }

        return true;
    }



    return (
        <section className={styles.signup}>

            <section className={styles.container}>
                <h1 className={styles.tit}>Sign up</h1>
                <form className={styles.form}>
                    <input ref={eRef} name="email" value={email} placeholder="blog@email.com" onChange={(e) => onChange(e)} className={styles.email}/>
                    <span ref={emailRef} className={styles.guideTxt}>Please check your email.</span>
                    <input ref={pRef} type="password" name="password" value={password} placeholder="password" onChange={onChange} className={styles.pw} />
                    <input ref={pRef2} type="password" name="password2" value={password2} placeholder="check your password." onChange={onChange} className={styles.pw2}/>
                    <span ref={pwRef} className={styles.guideTxt}></span>
                    <input name="name" value={name} placeholder="your name" onChange={onChange} className={styles.name}/>
                    <div className={styles.radioBtns}>
                    <input name="radio" type="radio" id="male" defaultChecked/>
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
