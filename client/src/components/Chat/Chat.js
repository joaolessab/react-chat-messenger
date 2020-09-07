import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');    
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

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
    
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]); // Shortchurt command to add message to the messages array
        });
    }, [messages]); // Only when messages are sent

    // Function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();

        // Send message and clean input
        if (message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room = {room} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
};

export default Chat;