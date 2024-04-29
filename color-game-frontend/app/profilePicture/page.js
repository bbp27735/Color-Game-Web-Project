'use client'
import ProfilePicPage from '../components/Pages/ProfilePicPage';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Login from "../components/Login"
import Topbar from "../components/TopBar"
import UserContext from '../context/UserContext';


const Page = ({ loginHandler }) => {
    return (
        <ProfilePicPage />
    );
}

export default Page;