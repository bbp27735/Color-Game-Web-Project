import React from 'react';
import './Chat.css';


// put div into flexblock most likely
const Chat = props => {
    return (    
        <li className="user-item">
        <div className="user-info">
            <h2>{props.name}</h2>
            <h3>{props.message}</h3>
        </div>
        </li>
    )
}

export default Chat;
