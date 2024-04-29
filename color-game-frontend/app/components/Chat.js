import React, { useContext } from 'react';
import './Chat.css';
import UserContext from '../context/UserContext';



// want to give each chat their team color at the time, and store that in the list
const Chat = props => {

    const { userData, setUserData } = useContext(UserContext);

    // console.log("Username for chat: " + props.username);
    return (    
        <li className="user-item" key={props.key}>
        <div className="user-info">
            <h3>From: {props.username}</h3>
            <img src={props.image} alt="profile pic" width="50"></img>                      
            <h3>{props.message}</h3>
        </div>

        {userData.token ? (
                <div>
					<button onClick={props.onDelete}>Delete</button>
                    <button onClick={props.onEdit}>Edit</button>
                </div>
				) : (
                    <h1></h1>
                )}

        
        </li>
    )
}

export default Chat;
