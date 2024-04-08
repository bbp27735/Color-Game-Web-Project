import React from 'react';
import './Chat.css';



// want to give each chat their team color at the time, and store that in the list
const Chat = props => {

    

    console.log("Username for chat: " + props.username);
    return (    
        <li className="user-item" key={props.key}>
        <div className="user-info">
            <h3>From: {props.username}</h3>                    

            <h3>{props.message}</h3>
        </div>
        </li>
    )
}

export default Chat;
