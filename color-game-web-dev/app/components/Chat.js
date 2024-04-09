import React from 'react';
import './Chat.css';



// want to give each chat their team color at the time, and store that in the list
const Chat = props => {

    

    console.log("Username for chat: " + props.username);
    return (    
        <li className="user-item" key={props.key}>
        <div className="user-info">
            <h3>From: {props.username}</h3>
            <img src={props.img} alt="profile pic" width="50"></img>                      
            <h3>{props.message}</h3>
        </div>
        <button onClick={props.onDelete}>Delete</button>
        </li>
    )
}

export default Chat;
