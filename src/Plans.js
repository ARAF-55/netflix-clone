import './Plans.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectSubscription } from './features/subscribeSlice';
import { db, updateDoc, doc } from './firebase';


function Plans({ title, type }) {
    const subscribed = useSelector(selectSubscription);
    const user = useSelector(selectUser);

    const handleClick = async () => {
        if (subscribed === title) {
            return
        }
        else {
            const docRef = doc(db, 'payments', user.email);
            await updateDoc(docRef, {
                Product: title,
            });
        }
    }

    return (
        <div className='plans'>
            <div className='plansLeft'>
                <h3>{title}</h3>
                <h4>{type}</h4>
            </div>
            <button onClick={handleClick} className={`plansRight ${subscribed === title ? 'current' : ''}`}>
                {(subscribed === title) ? 'Current Package' : 'Subscribe'}
            </button>
        </div>
    );
}

export default Plans;
