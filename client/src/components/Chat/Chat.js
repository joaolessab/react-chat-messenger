import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';

    // Alternativa Hook for ComponentDidMount and ComponentUnmont 
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        {/* Triggers the socket io client using our endpoint which our socket io server is running */}
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        { /* Triggerring a function on the server side */ }
        socket.emit('join', { name, room }, () => {
            // Callback ready to use
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        };

    }, [ENDPOINT, location.search]); { /* According to hooks, only if these two parameters change, then it will trigger the server */ }
    

    return (
        <h1>Chat</h1>
    )
};

export default Chat;