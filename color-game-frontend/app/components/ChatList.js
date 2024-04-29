'use client'
import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import Chat from './Chat';
import './ChatList.css';
import AddChat from "./AddChat"
import axios from 'axios';

const ChatList = (props) => {

    const axios = require('axios');

    let returnChats = [];

    const getData = async () => {
        returnChats = await axios.get('http://localhost:8084/api/chats/');
        console.log('THIS IS MY GET REQUEST', returnChats.data);
      }

      useEffect( () => {
        getData();
      }, []);

    const listOfChats = [{
        id: 1,
        username: "Debug",
        chatContent: "Hello World!",
        image: "https://i.pinimg.com/564x/f0/e2/3e/f0e23e83f07e9da8f8ded461b4284504.jpg"
    },
    {
        id: 2,
        username: "Mario",
        chatContent: "Wahooo",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
    },
    {
        id: 3,
        username: "Stitch",
        chatContent: "Ohana",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/1200px-Stitch_%28Lilo_%26_Stitch%29.svg.png"
    }]

    const [chats, setChats] = useState(listOfChats);

    const { userData, setUserData } = useContext(UserContext);

<<<<<<< Updated upstream
=======
    axios.defaults.headers.common = {'Authorization': `Bearer ${userData.token}`}

    useEffect(() => {
        // Fetch chat data from the API
        axios.get('http://localhost:8084/api/chats')
            .then(function (response) {
                const jsonData = response.data;
                const formattedData = jsonData.map(function(item) {
                    return {
                        id: item._id,
                        username: item.username,
                        message: item.chatContent,
                        image: item.image
                    };
                });
                setChats(formattedData); // Update the state with fetched data
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [chats]);

>>>>>>> Stashed changes
    const handleChats = (enteredChatData) => {
        // console.log('Userdata ID:', userData.user.id);
        // console.log('Userdata username:', userData.user.username);
        const chatData = {
        ...enteredChatData,
        id : Math.random().toString(),
      
        }   

        if (chatData.username !== '' && chatData.chatContent !== '') {
            // Create a new array with the new chat data and the current chats
            let updatedChats = [chatData, ...chats];
    
            // Remove oldest chat if chats array length exceeds 5
            if (updatedChats.length > 5) {
                updatedChats.pop(); // Remove the first item (oldest chat)
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
                <Chat key={chat.id} image ={chat.image} username={chat.username} message={chat.chatContent} updatedData={chat.updated_date} onDelete={() => handleDeleteChat(chat.id)} />
            )}
                
        </div>

        {userData.token ? (
					<AddChat onSendChat={handleChats}/>
				) : (
					<h1>YOU ARE NOT LOGGED IN</h1>
                )}

        
        </div>
    )


}

export default ChatList;