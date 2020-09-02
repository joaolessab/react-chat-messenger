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
        console.log(name, room);

        {/* Triggers the socket io client using our endpoint which our socket io server is running */}
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);
    });
    

    return (
        <h1>Chat</h1>
    )
};

export default Chat;