import React, { createContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState(null);
    const [person, setPerson] = useState({});
    const [active, setActive] = useState([]);
    const socket = useRef();
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    useEffect(() => {
        socket.current = io('https://messagingappsocket.onrender.com', {
            transports: ['websocket']
        });
    }, []);

    
    return (
        <AccountContext.Provider
            value={{
                account,
                setAccount,
                person,
                setPerson,
                socket,
                active,
                setActive,
                newMessageFlag,
                setNewMessageFlag
            }}
        >
            {children}
        </AccountContext.Provider>
    );
};

export default AccountProvider;
