'use client'
import TopBar from "../TopBar";
import Login from "../Login";
import './Page.css';
import Link from 'next/link'





const SignUpPage = () => {
    return (
        <div>
            <TopBar />
            <h1 id="login_welcome">Welcome to Square Game!</h1>
            <Login />
            <Link id="link_to_login_signup" href='Log In'>Log In</Link>
        </div>
    );
}

export default SignUpPage;