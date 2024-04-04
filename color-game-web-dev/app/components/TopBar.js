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
        <header class="topBarButtons">
            <Link class="buttonUse" href='/gameplay'>Game Page</Link>
            <Link class="buttonUse" href='/statistics'>Stats</Link>
            <Link class="buttonUse" href='/login'>Log In</Link>
        </header>
        </div>
    );
}

export default TopBar;