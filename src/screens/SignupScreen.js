import './SignupScreen.css';

import {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword
} from '../firebase';

import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { colRef, setDoc, doc } from '../firebase';

function SignupScreen() {
    const dispatch = useDispatch();
    const email = useRef();
    const password = useRef();

    const signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then(userCred => {
                dispatch(login({
                    uid: userCred.user.uid,
                    email: userCred.user.email,
                }));
            })
            .catch(error => alert(error.message));
    };

    const register = () => {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then(async userCred => {
                await setDoc(doc(colRef, userCred.user.email), {
                    Product: "Netflix Standard"
                });
                dispatch(login({
                    uid: userCred.user.uid,
                    email: userCred.user.email
                }));
            })
    };

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={email} type="email" placeholder="Email" />
                <input ref={password} type="password" placeholder="Password" />
                <button onClick={signin} type="submit">Sign In</button>
                <h4>
                    <span className='signupScreen_span'>New to Netflix? </span>
                    <span onClick={register} className='signupScreen_link'>Sign Up Now</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;