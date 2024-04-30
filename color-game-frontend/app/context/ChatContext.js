"use client"
import {createContext, useState, useEffect} from 'react';

const ChatContext = createContext();

export const ChatProvider = ({children}) => {
    const [chatData, setChatData] = useState({
        id: undefined,
        chatContent: undefined,
    });


    return (
        <ChatContext.Provider value={{ chatData, setChatData }}>
            {children}
        </ChatContext.Provider>
    );
};

export default ChatContext;