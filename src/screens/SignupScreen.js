import './SignupScreen.css';
import { useNavigate } from 'react-router-dom';


function SignupScreen() {
    const navigate = useNavigate();

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
                <h4>
                    <span className='signupScreen_span'>New to Netflix? </span>
                    <span onClick={() => { navigate('/signin') }} className='signupScreen_link'>Sign Up Now</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;