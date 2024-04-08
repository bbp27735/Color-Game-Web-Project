import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from "./Button"
import './LogoutButton.css'

const LogoutButton = () => {
    return (
        <div>
            <header>
            <Link class="logout-button" href="/login" className="logout-button">
            Logout
            </Link>
        </header>
        </div>
    );
};

export default LogoutButton;