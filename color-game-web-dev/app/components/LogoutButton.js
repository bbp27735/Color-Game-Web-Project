import React from 'react';
import Link from 'next/link';
import './LogoutButton.css'

const LogoutButton = (props) => {
    const handleClick = () => {
        console.log("Logout button clicked")
        props.onLogout(); // Call the function to toggle isLoggedIn state
    }

    return (
        <div>
            <header>
                <Link href="/login" className="logout-button" onClick={handleClick}>
                    Logout
                </Link>
            </header>
        </div>
    );
};

export default LogoutButton;
