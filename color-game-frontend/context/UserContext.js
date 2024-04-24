import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect (() => {
        // Check for stored token in local storage
        const token = localStorage.getItem('auth-token');
        if (token) {
            setUserData(prev => ({
                ...prev,
                token: token,
            }));
            // optionally, you could verify the token with the backend
            // and if its valid, load user data
        }
    }, []);


    return (
        <UserContext.Provider value={{ userData, setData }}>
            { children }
        </UserContext.Provider>
    );
};

// to use all of this, there is more to express, and more explained in the
// Authentication with JWT Handout
// this helps a lot with setting this all up.

export default UserContext;