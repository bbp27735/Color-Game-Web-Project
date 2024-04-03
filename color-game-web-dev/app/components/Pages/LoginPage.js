import TopBar from '../TopBar';
import Login from '../Login';
import Link from 'next/link'
import './Page.css';



export default function LoginPage(props) {
    const loginDataHandler = (loginInfo) => {
        console.log("Login to the page when credentials are entered: " + loginInfo)
        console.log("Attempt to change page" + loginInfo.name);
        console.log(loginInfo.pass);

        props.onLoginInfoSubmit(loginInfo);
        

    }
    return (
        <div>
            <TopBar />
            <h1 id="login_welcome">Welcome to Square Game!</h1>            <Login onSaveUserData={loginDataHandler}/>
            <Link id="signupLink" href='signup'>Sign Up</Link>
        </div>
    );
  }

  // need to pass in Login function