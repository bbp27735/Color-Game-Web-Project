'use client'
import TopBar from "../TopBar";
import Signup from "../Signup";
import './Page.css';
import Link from 'next/link'





const SignUpPage = (props) => {

    const signupDataHandler = (signupInfo) => {
        console.log("Sign up for the page when credentials are entered: " + signupInfo)
        console.log("Attempt to change page" + signupInfo.name);
        console.log(signupInfo.pass);
        signupInfo = {
            ...signupInfo
        }
    
        props.onSignupInfoSubmit(signupInfo);
        
    
    }
    return (
        <div>
            <TopBar />
            <h1 id="login_welcome">Welcome to Square Game!</h1>
            <Signup onSaveUserData={signupDataHandler}/>
            <Link id="link_to_login_signup" href='login'>Log In</Link>
        </div>
    );
}

export default SignUpPage;