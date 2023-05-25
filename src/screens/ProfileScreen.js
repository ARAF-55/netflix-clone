import { useSelector } from 'react-redux';
import Nav from '../Nav';
import './ProfileScreen.css';
import { selectUser } from '../features/userSlice';
import { auth, signOut } from '../firebase';
import { useNavigate } from 'react-router-dom';
import PlanScreen from './PlanScreen';

function ProfileScreen() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const handleSignOut = () => {
        signOut(auth);
        navigate('/', { replace: true });
    };

    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>

                <div className='profileScreen_info'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='kasa' />
                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            <PlanScreen />
                            <button onClick={handleSignOut} className='profileScreen_signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;