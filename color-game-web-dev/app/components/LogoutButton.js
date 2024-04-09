import React from 'react';
import Link from 'next/link';
import Button from "./Button";
import './LogoutButton.css'

const LogoutButton = (props) => {
    const handleClick = () => {
        console.log("Logout button clicked")
        props.onLogout(); // Call the function to toggle isLoggedIn state
    }

    return (
        <div>
            <header>
            
                <Button className="logout-button" onClick={handleClick}> Logout </Button>

            </header>
        </div>
    );
};

// <Link class="logout-button" href="/login" className="logout-button">

export default LogoutButton;
