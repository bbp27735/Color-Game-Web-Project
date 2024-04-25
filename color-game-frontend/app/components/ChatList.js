'use client'
import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import Chat from './Chat';
import './ChatList.css';
import AddChat from "./AddChat"

const ChatList = (props) => {

    const listOfChats = [{
        id: 1,
        username: "Debug",
        message: "Hello World!",
        img: "https://i.pinimg.com/564x/f0/e2/3e/f0e23e83f07e9da8f8ded461b4284504.jpg"
    },
    {
        id: 2,
        username: "Mario",
        message: "Wahooo",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
    },
    {
        id: 3,
        username: "Stitch",
        message: "Ohana",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/1200px-Stitch_%28Lilo_%26_Stitch%29.svg.png"
    }]

    const [chats, setChats] = useState(listOfChats);

    const { userData, setUserData } = useContext(UserContext);

    const handleChats = (enteredChatData) => {
        const chatData = {
        ...enteredChatData,
        id : Math.random().toString(),
      
        }

        // if (chatData.username != '' && chatData.message != '') {
        //   setChats([...chats, chatData])
        // }        
        
        if (chatData.username !== '' && chatData.message !== '') {
            // Create a new array with the new chat data and the current chats
            let updatedChats = [...chats, chatData];
    
            // Remove oldest chat if chats array length exceeds 5
            if (updatedChats.length > 5) {
                updatedChats.shift(); // Remove the first item (oldest chat)
            }
    
            setChats(updatedChats);
        }

    }

    

    const handleDeleteChat = (chatID) => {
        setChats(chats.filter(chat => chat.id !== chatID));
    }


    // might need a key value on the list li
    // need a chat send button
    return (
        <div className="chatDiv">
        <div className="chat-ul">
            {chats.map((chat) => 
                <Chat key={chat.id} img ={chat.img} username={chat.username} message={chat.message} onDelete={() => handleDeleteChat(chat.id)} />
            )}
                
        </div>

        {userData.token ? (
					<AddChat onSendChat={handleChats}/>
				) : (
					<h1>YOURE NOT LOGGED IN</h1>
                )}

        
        </div>
    )


}

export default ChatList;