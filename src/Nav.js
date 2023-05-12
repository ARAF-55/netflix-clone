import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, []);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_contents nav_black'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' className='nav_logo' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' className='nav_avatar' />
            </div>
        </div>
    );
}

export default Nav;