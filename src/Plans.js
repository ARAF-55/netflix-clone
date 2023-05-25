import { useState, useEffect } from 'react';
import './Plans.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { colRef } from './firebase';
import { documentId, query, where, onSnapshot } from 'firebase/firestore';

function Plans({ title, type }) {
    const [subscribed, setSubscribed] = useState("");
    const user = useSelector(selectUser);


    const q = query(colRef, where(documentId(), "==", user.email));
    const unsubscribe = onSnapshot(q, snapshot => {
        const [my_data] = snapshot.docs;
        const { Product } = my_data.data();
        setSubscribed(Product);
    });



    return (
        <div className='plans'>
            <div className='plansLeft'>
                <h3>{title}</h3>
                <h4>{type}</h4>
            </div>
            <button className={`plansRight ${subscribed === title ? 'current' : ''}`}>
                {(subscribed === title) ? 'Current Package' : 'Subscribe'}
            </button>
        </div>
    );
}

export default Plans;
