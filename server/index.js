const express = require('express');
const socketio = require('socket.io');
const http = require('http');

// Calling User File that has all the functions we want to use
const { addUser, removeUser, getUser, getUsersInRoom } = require ('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');
const { info } = require('console');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Integration = Run when the client connects via frontend
io.on('connection', (socket) => {
    /* Triggers when somebody access the endpoint */
    //console.log('We have a new connection!');
    // Hook for frontend
    socket.on('join', ({name, room}, callback) => {
        const { error, user } = addUser({id: socket.id, name, room});

        if (error) return callback(error);

        //Send a message only for the user selected
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}.`});

        //Send a message to all the users, not only the specified
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
        
        // Built-in method
        socket.join(user.room);

        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});

        callback();
    });

    // Hook for frontend
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
    
        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, text: message });
    
        callback();
    });

    /* Triggers when somebody leaves the page or connection */
    socket.on('disconnect', () => {
        const user = removeUser(socket.id);        
        if (user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left!` });
        }
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));