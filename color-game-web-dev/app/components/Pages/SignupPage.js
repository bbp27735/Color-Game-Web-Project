'use client'
import TopBar from "../TopBar";
import Signup from "../Signup";
import './Page.css';
import Link from 'next/link'





const SignUpPage = () => {
    return (
        <div>
            <TopBar />
            <h1 id="login_welcome">Welcome to Square Game!</h1>
            <Signup />
            <Link id="link_to_login_signup" href='login'>Log In</Link>
        </div>
    );
}

export default SignUpPage;