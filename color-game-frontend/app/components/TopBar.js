'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from "./Button"
import './TopBar.css'

const TopBar = () => {

    // Need to add a disabler for when the current page is loaded
    const { userData, setUserData } = useContext(UserContext);
	const router = useRouter();

	const handleLogout = () => {
		setUserData({ token: undefined, user: undefined }); // Clear user data
		localStorage.removeItem('auth-token'); // Clear the token from local storage
		router.push('/login'); // Redirect to the login page
	};

    return(
        <div>
        <header className="topBarButtons">
            <Link className="buttonUse" href='/gameplay'>Game Page</Link>
            

            {userData.token ? (
					<button onClick={handleLogout} className="buttonUse">
						Logout
					</button>
				) : (
					<Link className="buttonUse" href="/login">Login</Link>
                )}

            {/* <Link className="buttonUse" href='/login'>Log In</Link> THIS IS THE OLD LOGOUT BUTTON */} 
            <Link className="buttonUse" href='/profilePicture'>Profile Picture</Link>
            <h3>Square Game</h3>
        </header>
        </div>
    );
}

export default TopBar;