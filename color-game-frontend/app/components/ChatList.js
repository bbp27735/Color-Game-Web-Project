'use client'
import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import Chat from './Chat';
import './ChatList.css';
import AddChat from "./AddChat"
import { useRouter } from 'next/navigation';
import axios from 'axios';

const ChatList = (props) => {



    const [chats, setChats] = useState([]);

    const { userData, setUserData } = useContext(UserContext);

    axios.defaults.headers.common = {'Authorization': `Bearer ${userData.token}`}

    const router = useRouter();

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

    const handleEditChat = (chatID) => {
        router.push('/editpage');
    }

    const handleChats = (enteredChatData) => {
        // console.log('Userdata ID:', userData.user.id);
        // console.log('Userdata username:', userData.user.username);
        const chatData = {
        ...enteredChatData,
        //id : Math.random().toString(),
        }

        // if (chatData.username != '' && chatData.message != '') {
        //   setChats([...chats, chatData])
        // }        
        
        if (chatData.username !== '' && chatData.message !== '') {
            // Create a new array with the new chat data and the current chats
            let updatedChats = [chatData, ...chats];
    
            // Remove oldest chat if chats array length exceeds 5
            if (updatedChats.length > 5) {
                let chatIDToDelete = chats[0].id; // Remove the first item (oldest chat)
                console.log(chatIDToDelete);
                console.log(chats[0]);
                handleDeleteChat(chatIDToDelete);
            }
    
            setChats(updatedChats);
        }

        // Send the chat data to the API
        axios.post('http://localhost:8084/api/chats/add', {
            username: chatData.username,
            chatContent: chatData.message,
            image: chatData.image
        })
            .then(function (response) {
                console.log("Trying post");
                console.log(response);
            })
            .catch(function (error) {
                console.log("Post error");
                console.log(error);
            });
    }


    const handleDeleteChat = (chatID) => {
        console.log("Deleting chat with ID: " + chatID);
        console.log('Token: ', userData.token);
        // Validate if the current user's username matches the username associated with the chat message
        // if (userData.user.username === chats.find(chat => chat.id === chatID)?.username) {
            axios.delete(`http://localhost:8084/api/chats/${chatID}`)
                .then(function (response) {
                    console.log(response);
                    // Update the chat list after successful deletion
                    const updatedChats = chats.filter(chat => chat.id !== chatID);
                    setChats(updatedChats);
                })
                .catch(function (error) {
                    console.log(error);
                });

    };
    
    


    // might need a key value on the list li
    // need a chat send button
    return (
        <div className="chatDiv">
        <div className="chat-ul">
            {chats.map((chat) => 
                <Chat key={chat.id} image ={chat.image} username={chat.username} message={chat.message} onDelete={() => handleDeleteChat(chat.id)} onEdit={() => handleEditChat(chat.id)} />
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