'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from "./Button"
import './TopBar.css'

const TopBar = () => {

    // Need to add a disabler for when the current page is loaded

    return(
        <div>
        <header className="topBarButtons">
            <Link className="buttonUse" href='/gameplay'>Game Page</Link>
            <Link className="buttonUse" href='/statistics'>Stats</Link>
            <Link className="buttonUse" href='/login'>Log In</Link>
            <h3>Square Game</h3>
        </header>
        </div>
    );
}

export default TopBar;