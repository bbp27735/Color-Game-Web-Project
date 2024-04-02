import TopBar from '../TopBar';
import Login from '../Login';
import { Link } from 'react-router-dom';




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
            <Login onSaveUserData={loginDataHandler}/>
        </div>
    );
  }

  // need to pass in Login function